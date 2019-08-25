import { takeLatest, all, call } from 'redux-saga/effects';

import { ActionType, CreatePayment } from 'types';
import { PaymentService } from 'services';

export function* stripeSagas() {
  yield all([call(watchCreatePayment)]);
}

function* watchCreatePayment() {
  yield takeLatest(ActionType.CREATE_PAYMENT, createPaymentWorker);
}

function* createPaymentWorker(action: CreatePayment) {
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
  } catch (e) {
    console.error('@createPaymentWorker', e.message);
    alert(
      'There was an issue with your payment. Please ensure you use the provided credit card',
    );
  }
}
