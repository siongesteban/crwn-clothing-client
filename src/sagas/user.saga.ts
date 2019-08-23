import { takeLatest, all, put, call } from 'redux-saga/effects';

import { ActionType, User, SignInWithEmailStart } from 'types';
import { FirebaseAuth } from 'services/auth';
import {
  signInError,
  signInSuccess,
  signOutSuccess,
  signOutError
} from 'actions';

export function* userSagas() {
  yield all([
    call(watchAuthenticateUser),
    call(watchSignInWithGoogle),
    call(watchSignInWithEmail),
    call(watchSignOut),
  ]);
}

function* watchAuthenticateUser() {
  yield takeLatest(ActionType.AUTHENTICATE_USER, authenticateUserWorker);
}

function* authenticateUserWorker() {
  try {
    const auth = FirebaseAuth.getInstance();
    const user: User | null = yield call({
      context: auth,
      fn: auth.authenticate,
    });

    if (!user) {
      return;
    }

    yield put(signInSuccess(user));
  } catch (e) {
    const { message } = e;

    console.error('@authenticateUserWorker', message);

    yield put(signInError({ message }));
  }
}

function* watchSignInWithGoogle() {
  yield takeLatest(
    ActionType.SIGN_IN_WITH_GOOGLE_START,
    signInWithGoogleWorker,
  );
}

function* signInWithGoogleWorker() {
  try {
    const auth = FirebaseAuth.getInstance();
    const user: User = yield call({ context: auth, fn: auth.signInWithGoogle });

    yield put(signInSuccess(user));
  } catch (e) {
    const { message } = e;

    console.error('@signInWithGoogleWorker', message);

    yield put(signInError({ message }));
  }
}

function* watchSignInWithEmail() {
  yield takeLatest(ActionType.SIGN_IN_WITH_EMAIL_START, signInWithEmailWorker);
}

function* signInWithEmailWorker(action: SignInWithEmailStart) {
  try {
    const {
      payload: { credentials },
    } = action;
    const auth = FirebaseAuth.getInstance();

    const user: User = yield call(
      { context: auth, fn: auth.signInWithEmail },
      credentials,
    );

    yield put(signInSuccess(user));
  } catch (e) {
    const { message } = e;

    console.error('@signInWithEmailWorker', message);

    yield put(signInError({ message }));
  }
}

function* watchSignOut() {
  yield takeLatest(ActionType.SIGN_OUT_START, signOutWorker);
}

function* signOutWorker() {
  try {
    const auth = FirebaseAuth.getInstance();
    yield call({
      context: auth,
      fn: auth.signOut,
    });

    yield put(signOutSuccess());
  } catch (e) {
    const { message } = e;

    console.error('@signOutWorker', message);

    yield put(signOutError({ message }));
  }
}
