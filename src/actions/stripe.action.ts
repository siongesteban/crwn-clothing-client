import {
  Payment,
  CreatePaymentStart,
  ActionType,
  CreatePaymentSuccess,
  CreatePaymentError
} from 'types';

export const createPayment = (data: Payment): CreatePaymentStart => ({
  type: ActionType.CREATE_PAYMENT_START,
  payload: { data },
});

export const createPaymentSuccess = (): CreatePaymentSuccess => ({
  type: ActionType.CREATE_PAYMENT_SUCCESS,
});

export const createPaymentError = (): CreatePaymentError => ({
  type: ActionType.CREATE_PAYMENT_ERROR,
});
