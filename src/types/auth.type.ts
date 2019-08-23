import { User } from 'types';

export interface AuthCredentials {
  email: string;
  password: string;
}

export type AuthCallback<T = User> = (user: T | null) => void;

export type SignupCredentials = User &
  AuthCredentials & { confirmPassword: string };
