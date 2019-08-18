import { User } from './';

export interface AuthCredentials {
  email: string;
  password: string;
}

export type AuthCallback<T = User> = (user: T | null) => void;
