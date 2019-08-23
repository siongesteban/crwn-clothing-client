import {
  ActionType,
  User,
  SignInWithEmailStart,
  SignInError,
  SignInWithGoogleStart,
  StateError,
  AuthCredentials,
  SignInSuccess
} from 'types';

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
