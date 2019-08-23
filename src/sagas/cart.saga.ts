import { takeLatest, put, all, call } from 'redux-saga/effects';
import { ActionType } from 'types';
import { clearCart } from 'actions';

export function* cartSagas() {
  yield all([call(watchSignOutSuccess)]);
}

function* watchSignOutSuccess() {
  yield takeLatest(ActionType.SIGN_OUT_SUCCESS, clearCartWorker);
}

function* clearCartWorker() {
  yield put(clearCart());
}
