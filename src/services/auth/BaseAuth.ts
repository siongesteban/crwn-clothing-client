import { AuthCredentials, User } from 'types';

export abstract class BaseAuth<T, K = User> {
  protected abstract client: T;

  abstract async authenticate(): Promise<K | null>;
  // abstract async signIn(credentials?: AuthCredentials): Promise<K>;
  abstract async signUp(credentials?: AuthCredentials): Promise<K | null>;
  abstract async signOut(): Promise<void>;
}
