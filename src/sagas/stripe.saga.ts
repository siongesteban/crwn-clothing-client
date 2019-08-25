import { takeLatest, all, call, put } from 'redux-saga/effects';

import { ActionType, CreatePaymentStart } from 'types';
import { PaymentService } from 'services';
import { history } from 'utils';
import { createPaymentSuccess, createPaymentError } from 'actions';

export function* stripeSagas() {
  yield all([call(watchCreatePayment)]);
}

function* watchCreatePayment() {
  yield takeLatest(ActionType.CREATE_PAYMENT_START, createPaymentWorker);
}

function* createPaymentWorker(action: CreatePaymentStart) {
  try {
    const {
      payload: { data },
    } = action;
    const paymentService = PaymentService.getInstance();

    yield call(
      { context: paymentService, fn: paymentService.createPayment },
      data,
    );

    alert('Payment successful');

    yield put(createPaymentSuccess());

    history.push('/');
  } catch (e) {
    console.error('@createPaymentWorker', e.message);

    alert(
      'There was an issue with your payment. Please ensure you use the provided credit card',
    );

    yield put(createPaymentError());
  }
}
