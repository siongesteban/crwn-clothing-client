import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop.saga';
import { userSagas } from './user.saga';

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
