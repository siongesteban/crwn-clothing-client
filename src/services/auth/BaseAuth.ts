import { SigninCredentials, User, AuthCallback } from '../../types';

export abstract class BaseAuth<T, K = User> {
  protected abstract client: T;

  abstract async authenticate(callback?: AuthCallback): Promise<K>;

  abstract async signIn(credentials?: SigninCredentials): Promise<K>;

  abstract async signOut(): Promise<void>;
}
