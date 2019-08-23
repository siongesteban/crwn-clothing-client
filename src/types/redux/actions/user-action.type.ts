import { User, StateErrorPayload } from 'types';
import { AuthCredentials } from 'types/auth.type';

interface UserPayload {
  user: User;
}

export enum UserActionType {
  AUTHENTICATE_USER = '@@user/AUTHENTICATE',
  SIGN_IN_WITH_EMAIL_START = '@@user/SIGN_IN_WITH_EMAIL_START',
  SIGN_IN_WITH_GOOGLE_START = '@@user/SIGN_IN_WITH_GOOGLE_START',
  SIGN_IN_SUCCESS = '@@user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = '@@user/SIGN_IN_ERROR',
  SIGN_OUT_START = '@@user/SIGN_OUT_START',
  SIGN_OUT_SUCCESS = '@@user/SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR = '@@user/SIGN_OUT_ERROR',
}

export interface AuthenticateUser {
  type: UserActionType.AUTHENTICATE_USER;
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

export interface SignOutStart {
  type: UserActionType.SIGN_OUT_START;
}

export interface SignOutSuccess {
  type: UserActionType.SIGN_OUT_SUCCESS;
}

export interface SignOutError {
  type: UserActionType.SIGN_OUT_ERROR;
  payload: StateErrorPayload;
}

export type UserAction =
  | AuthenticateUser
  | SignInWithEmailStart
  | SignInWithGoogleStart
  | SignInSuccess
  | SignInError
  | SignOutStart
  | SignOutSuccess
  | SignOutError;
