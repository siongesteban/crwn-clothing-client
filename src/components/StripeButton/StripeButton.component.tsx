import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { Item } from 'types';
import { env } from 'configs';

interface Props {
  price: Item['price'];
}

export const StripeButton: React.FC<Props> = ({ price }) => {
  const handleToken = (token: Token) => {
    console.log('Payment Token:', token);
    alert('Payment successful');
  };

  const priceForStripe = price * 100;
  const publishableKey = env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress={true}
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      panelLabel="Pay Now"
      shippingAddress={true}
      stripeKey={publishableKey}
      token={handleToken}
    />
  );
};
