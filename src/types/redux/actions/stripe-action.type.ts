import { Payment } from 'types';

export enum StripeActionType {
  CREATE_PAYMENT_START = '@@stripe/CREATE_PAYMENT_START',
  CREATE_PAYMENT_SUCCESS = '@@stripe/CREATE_PAYMENT_SUCCESS',
  CREATE_PAYMENT_ERROR = '@@stripe/CREATE_PAYMENT_ERROR',
}

export interface CreatePaymentStart {
  type: StripeActionType.CREATE_PAYMENT_START;
  payload: {
    data: Payment;
  };
}

export interface CreatePaymentSuccess {
  type: StripeActionType.CREATE_PAYMENT_SUCCESS;
}

export interface CreatePaymentError {
  type: StripeActionType.CREATE_PAYMENT_ERROR;
}

export type StripeAction =
  | CreatePaymentStart
  | CreatePaymentSuccess
  | CreatePaymentError;
