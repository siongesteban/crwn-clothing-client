import { Payment, CreatePayment, ActionType } from 'types';

export const createPayment = (data: Payment): CreatePayment => ({
  type: ActionType.CREATE_PAYMENT,
  payload: { data },
});
