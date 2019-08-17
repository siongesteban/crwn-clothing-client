import { User, FirebaseUser, AuthCallback } from '../../types';
import { firebase } from '../clients';
import { BaseAuth } from './BaseAuth';
import { UserService } from '../UserService';

type Client = firebase.auth.Auth;

export class FirebaseAuth extends BaseAuth<Client, void> {
  private static instance: FirebaseAuth;
  protected client: Client;
  private signInWithProvider: () => Promise<firebase.auth.UserCredential>;
  private unsubscribeFromAuth: firebase.Unsubscribe | undefined;

  private userService = UserService.getInstance();

  constructor() {
    super();

    const provider = new firebase.auth.GoogleAuthProvider().setCustomParameters(
      { prompt: 'select_account' },
    );

    this.client = firebase.auth();
    this.signInWithProvider = () => this.client.signInWithPopup(provider);
  }

  static getInstance(): FirebaseAuth {
    if (!FirebaseAuth.instance) {
      FirebaseAuth.instance = new FirebaseAuth();
    }

    return FirebaseAuth.instance;
  }

  async authenticate(callback: AuthCallback): Promise<void> {
    return new Promise(resolve => {
      let user: User | undefined;

      this.unsubscribeFromAuth = this.client.onAuthStateChanged(
        async (firebaseUser: FirebaseUser) => {
          if (!firebaseUser) {
            user = undefined;
          } else {
            const { displayName, email, phoneNumber, uid } = firebaseUser;

            user = {
              ...(uid && { uid }),
              ...(displayName && { firstName: displayName, lastName: '' }),
              ...(email && { email }),
              ...(phoneNumber && { phoneNumber }),
            } as User;

            const userFromDB = await this.userService.get(uid);

            if (!userFromDB) {
              await this.userService.create(user);
            }
          }

          callback(user);
        },
      );

      resolve();
    });
  }

  async signIn(): Promise<void> {
    return new Promise(resolve => {
      this.signInWithProvider();
      resolve();
    });
  }

  async signOut(): Promise<void> {
    await this.client.signOut();
  }

  unsubscribe(): void {
    const { unsubscribeFromAuth } = this;

    unsubscribeFromAuth && unsubscribeFromAuth();
  }
}
