import { AuthCredentials, AuthCallback, User } from 'types';

export abstract class BaseAuth<T, K = User> {
  protected abstract client: T;

  abstract async authenticate(callback?: AuthCallback): Promise<K>;
  abstract async signIn(credentials?: AuthCredentials): Promise<K>;
  abstract async signUp(credentials?: AuthCredentials): Promise<K>;
  abstract async signOut(): Promise<void>;
}
