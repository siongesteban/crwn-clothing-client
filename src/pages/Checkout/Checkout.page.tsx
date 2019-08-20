import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartItem, RootState } from 'types';
import { CheckoutItem, StripeButton } from 'components';
import { selectCartItems, selectCartTotal } from 'selectors';

import { S } from './Checkout.style';

interface CheckoutProps {
  items: CartItem[];
  total: number;
}

const C: React.FC<CheckoutProps> = ({ items, total }) => (
  <S.Wrapper>
    <S.HeaderWrapper>
      {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(title => (
        <S.Header key={title}>
          <span>{title}</span>
        </S.Header>
      ))}
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
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, CheckoutProps>({
  items: selectCartItems,
  total: selectCartTotal,
});

const CConnected = connect(mapStateToProps)(C);

export const Checkout = CConnected;