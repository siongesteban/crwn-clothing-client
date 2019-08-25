import { Payment } from 'types';

export enum StripeActionType {
  CREATE_PAYMENT_START = '@@stripe/CREATE_PAYMENT_START',
  CREATE_PAYMENT_SUCCESS = '@@stripe/CREATE_PAYMENT_SUCCESS',
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

export type StripeAction = CreatePaymentStart | CreatePaymentSuccess;
