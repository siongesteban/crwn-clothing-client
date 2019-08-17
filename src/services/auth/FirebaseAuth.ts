import { User, FirebaseUser, AuthCallback, AuthCredentials } from '../../types';
import { firebase } from '../clients';
import { BaseAuth } from './BaseAuth';
import { UserService } from '../UserService';

enum AuthProvider {
  GOOGLE,
}

interface Provider {
  [key: number]: firebase.auth.AuthProvider;
}

type Client = firebase.auth.Auth;

export class FirebaseAuth extends BaseAuth<Client, void> {
  private static instance: FirebaseAuth;
  protected client: Client;
  private provider: Provider;
  private unsubscribeFromAuth: firebase.Unsubscribe | undefined;

  private userService = UserService.getInstance();

  constructor() {
    super();

    this.provider = {
      [AuthProvider.GOOGLE]: this.createAuthProvider(AuthProvider.GOOGLE),
    };

    this.client = firebase.auth();
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
            const { displayName, email, uid } = firebaseUser;

            user = {
              uid,
              displayName,
              email,
            } as User;

            let userFromDB = await this.userService.get(uid);

            if (!userFromDB) {
              userFromDB = await this.userService.create(user);
            }

            user = userFromDB;
          }

          callback(user);
        },
      );

      resolve();
    });
  }

  async signIn(credentials: AuthCredentials): Promise<void> {
    try {
      const { email, password } = credentials;
      await this.client.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error('@FirebaseAuth::signIn', e.message);
    }
  }

  async signUp(data: User & AuthCredentials) {
    try {
      const { displayName, email, password } = data;
      const result = await this.client.createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = result.user as User;
      await this.userService.create({
        email,
        displayName,
        uid: user.uid,
      });
    } catch (e) {
      console.error('@FirebaseAuth::signUp', e.message);
    }
  }

  async signOut(): Promise<void> {
    await this.client.signOut();
  }

  unsubscribe(): void {
    const { unsubscribeFromAuth } = this;

    unsubscribeFromAuth && unsubscribeFromAuth();
  }

  signInWithGoogle() {
    const { client, provider } = this;

    client.signInWithPopup(provider[AuthProvider.GOOGLE]);
  }

  private createAuthProvider(
    providerName: AuthProvider,
  ): firebase.auth.AuthProvider {
    switch (providerName) {
      case AuthProvider.GOOGLE:
        return new firebase.auth.GoogleAuthProvider().setCustomParameters({
          prompt: 'select_account',
        });
      default:
        return new firebase.auth.EmailAuthProvider();
    }
  }
}
