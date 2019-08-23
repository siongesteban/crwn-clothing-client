import {
  ActionType,
  User,
  SignInWithEmailStart,
  SignInError,
  SignInWithGoogleStart,
  StateError,
  AuthCredentials,
  SignInSuccess,
  AuthenticateUser,
  SignOutStart,
  SignOutSuccess,
  SignOutError
} from 'types';

export const authenticateUser = (): AuthenticateUser => ({
  type: ActionType.AUTHENTICATE_USER,
});

export const signInWithEmail = (
  credentials: AuthCredentials,
): SignInWithEmailStart => ({
  type: ActionType.SIGN_IN_WITH_EMAIL_START,
  payload: { credentials },
});

export const signInWithGoogle = (): SignInWithGoogleStart => ({
  type: ActionType.SIGN_IN_WITH_GOOGLE_START,
});

export const signInSuccess = (user: User): SignInSuccess => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: { user },
});

export const signInError = (error: StateError): SignInError => ({
  type: ActionType.SIGN_IN_ERROR,
  payload: { error },
});

export const signOut = (): SignOutStart => ({
  type: ActionType.SIGN_OUT_START,
});

export const signOutSuccess = (): SignOutSuccess => ({
  type: ActionType.SIGN_OUT_SUCCESS,
});

export const signOutError = (error: StateError): SignOutError => ({
  type: ActionType.SIGN_OUT_ERROR,
  payload: { error },
});
