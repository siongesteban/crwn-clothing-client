import { User, FirebaseUser, AuthCredentials, SignupCredentials } from 'types';
import { UserService } from 'services';
import { BaseAuth } from 'services/auth';
import { firebase } from 'services/clients';

enum AuthProvider {
  GOOGLE,
}

interface Provider {
  [key: number]: firebase.auth.AuthProvider;
}

type Client = firebase.auth.Auth;

export class FirebaseAuth extends BaseAuth<Client, User> {
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

  async authenticate() {
    return new Promise<User | null>((resolve, reject) => {
      const unsubscribeFromAuth = this.client.onAuthStateChanged(
        async (firebaseUser: FirebaseUser) => {
          try {
            unsubscribeFromAuth();

            if (!firebaseUser) {
              resolve(null);
            } else {
              const user = await this.getUser(firebaseUser as User);
              resolve(user);
            }
          } catch (e) {
            console.error('@FirebaseAuth::authenticate', e.message);
            resolve(null);
          }
        },
        reject,
      );
    });
  }

  async signInWithEmail(credentials: AuthCredentials): Promise<User | null> {
    try {
      const { email, password } = credentials;

      const {
        user: firebaseUser,
      } = await this.client.signInWithEmailAndPassword(email, password);

      const user = await this.getUser(firebaseUser as User);

      return user;
    } catch (e) {
      console.error('@FirebaseAuth::signInWithEmail', e.message);
      throw e;
    }
  }

  async signInWithGoogle(): Promise<User | null> {
    try {
      const { client, provider } = this;

      const { user: firebaseUser } = await client.signInWithPopup(
        provider[AuthProvider.GOOGLE],
      );

      const user = await this.getUser(firebaseUser as User);

      return user;
    } catch (e) {
      console.error('@FirebaseAuth::signInWithEmail', e.message);
      return null;
    }
  }

  async signUp(data: SignupCredentials) {
    try {
      const { displayName, email, password } = data;
      const {
        user: firebaseUser,
      } = await this.client.createUserWithEmailAndPassword(email, password);

      const newUser = await this.getUser({
        ...firebaseUser,
        displayName,
      } as User);

      return newUser;
    } catch (e) {
      console.error('@FirebaseAuth::signUp', e.message);
      return null;
    }
  }

  async signOut(): Promise<void> {
    await this.client.signOut();
  }

  unsubscribe(): void {
    const { unsubscribeFromAuth } = this;

    unsubscribeFromAuth && unsubscribeFromAuth();
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

  private async getUser(firebaseUser: User): Promise<User> {
    const { displayName, email, uid } = firebaseUser;

    let userFromDB = uid && (await this.userService.get(uid));

    if (!userFromDB) {
      userFromDB = await this.userService.create({
        uid,
        displayName,
        email,
      } as User);
    }

    return userFromDB as Required<User>;
  }
}
