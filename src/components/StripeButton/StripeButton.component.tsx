import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { Item } from 'types';
import { env } from 'configs';
import { createPayment } from 'actions';

interface Props {
  price: Item['price'];
  createPayment: typeof createPayment;
}

const C: React.FC<Props> = ({ price, createPayment }) => {
  const priceForStripe = price * 100;
  const publishableKey = env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const handleToken = (token: Token) => {
    createPayment({ token, amount: priceForStripe });
  };

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

const dispatchProps = { createPayment };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const StripeButton = CConnected;
