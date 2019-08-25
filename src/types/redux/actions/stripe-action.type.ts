import { Payment } from 'types';

export enum StripeActionType {
  CREATE_PAYMENT = '@@stripe/CREATE_PAYMENT',
}

export interface CreatePayment {
  type: StripeActionType.CREATE_PAYMENT;
  payload: {
    data: Payment;
  };
}

export type StripeAction = CreatePayment;
