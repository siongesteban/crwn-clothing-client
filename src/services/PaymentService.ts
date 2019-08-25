import axios, { AxiosError } from 'axios';

import { Payment, PaymentResponse } from 'types';
import { env } from 'configs';

export class PaymentService {
  private static instance: PaymentService;
  private baseURL = env.REACT_APP_PAYMENT_SERVICE_BASE_URL;

  static getInstance() {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }

    return PaymentService.instance;
  }

  async createPayment(data: Payment): Promise<PaymentResponse | undefined> {
    try {
      const response = await axios.post<PaymentResponse>(
        `${this.baseURL}/payment`,
        data,
      );

      return response.data;
    } catch (e) {
      const { response } = e as AxiosError<{ error: string }>;

      if (response) {
        const message = response.data.error;

        console.error('@PaymentService::createPayment', e.message);

        throw new Error(message);
      }
    }
  }
}
