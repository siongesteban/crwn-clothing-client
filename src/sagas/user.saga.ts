import { takeLatest, all, put, call } from 'redux-saga/effects';

import { ActionType, User, SignInWithEmailStart } from 'types';
import { FirebaseAuth } from 'services/auth';
import { signInError, signInSuccess } from 'actions';

export function* userSagas() {
  yield all([call(watchSignInWithGoogle), call(watchSignInWithEmail)]);
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
