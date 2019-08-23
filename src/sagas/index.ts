import { all, call } from 'redux-saga/effects';

import { cartSagas } from './cart.saga';
import { shopSagas } from './shop.saga';
import { userSagas } from './user.saga';

export function* rootSaga() {
  yield all([call(cartSagas), call(shopSagas), call(userSagas)]);
}
