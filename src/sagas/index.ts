import { all, call } from 'redux-saga/effects';

import { cartSagas } from './cart.saga';
import { shopSagas } from './shop.saga';
import { stripeSagas } from './stripe.saga';
import { userSagas } from './user.saga';

export function* rootSaga() {
  yield all([
    call(cartSagas),
    call(shopSagas),
    call(stripeSagas),
    call(userSagas),
  ]);
}
