import { User, StateErrorPayload } from 'types';
import { AuthCredentials } from 'types/auth.type';

interface UserPayload {
  user: User;
}

export enum UserActionType {
  SIGN_IN_WITH_EMAIL_START = '@@user/SIGN_IN_WITH_EMAIL_START',
  SIGN_IN_WITH_GOOGLE_START = '@@user/SIGN_IN_WITH_GOOGLE_START',
  SIGN_IN_SUCCESS = '@@user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = '@@user/SIGN_IN_ERROR',
}

export interface SignInWithEmailStart {
  type: UserActionType.SIGN_IN_WITH_EMAIL_START;
  payload: { credentials: AuthCredentials };
}

export interface SignInWithGoogleStart {
  type: UserActionType.SIGN_IN_WITH_GOOGLE_START;
}

export interface SignInSuccess {
  type: UserActionType.SIGN_IN_SUCCESS;
  payload: UserPayload;
}

export interface SignInError {
  type: UserActionType.SIGN_IN_ERROR;
  payload: StateErrorPayload;
}

export type UserAction =
  | SignInWithEmailStart
  | SignInWithGoogleStart
  | SignInSuccess
  | SignInError;
