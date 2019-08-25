import {
  Payment,
  CreatePaymentStart,
  ActionType,
  CreatePaymentSuccess
} from 'types';

export const createPayment = (data: Payment): CreatePaymentStart => ({
  type: ActionType.CREATE_PAYMENT_START,
  payload: { data },
});

export const createPaymentSuccess = (): CreatePaymentSuccess => ({
  type: ActionType.CREATE_PAYMENT_SUCCESS,
});
