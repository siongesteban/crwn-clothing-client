import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartItem, RootState } from 'types';
import { CheckoutItem } from 'components/CheckoutItem';
import { selectCartItems, selectCartTotal } from 'selectors';

import './checkout.style.scss';

interface CheckoutProps {
  items: CartItem[];
  total: number;
}

const C: React.FC<CheckoutProps> = ({ items, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {items.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, CheckoutProps>({
  items: selectCartItems,
  total: selectCartTotal,
});

const CConnected = connect(mapStateToProps)(C);

export const Checkout = CConnected;
