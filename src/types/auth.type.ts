import { User } from 'types';

export interface AuthCredentials {
  email: string;
  password: string;
}

export type AuthCallback<T = User> = (user: T | null) => void;
