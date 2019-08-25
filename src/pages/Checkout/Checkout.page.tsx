import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartItem, RootState } from 'types';
import { CheckoutItem, StripeButton, SpinnerOverlay } from 'components';
import {
  selectCartItems,
  selectCartTotal,
  selectPaymentInProgress
} from 'selectors';

import { S } from './Checkout.style';

interface Props {
  items: CartItem[];
  total: number;
  paymentInProgress: boolean;
}

const C: React.FC<Props> = ({ items, total, paymentInProgress }) => (
  <S.Wrapper>
    {paymentInProgress ? (
      <SpinnerOverlay />
    ) : (
      <>
        <S.HeaderWrapper>
          {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
            title => (
              <S.Header key={title}>
                <span>{title}</span>
              </S.Header>
            ),
          )}
        </S.HeaderWrapper>
        {items.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <S.Total>
          <span>Total: ${total}</span>
        </S.Total>
        <S.TestWarning>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </S.TestWarning>
        <StripeButton price={total} />
      </>
    )}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, Props>({
  items: selectCartItems,
  total: selectCartTotal,
  paymentInProgress: selectPaymentInProgress,
});

const CConnected = connect(mapStateToProps)(C);

export const CheckoutPage = CConnected;
