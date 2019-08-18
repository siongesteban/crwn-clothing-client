import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '../../common';
import { CartItem } from '../Item';

import { RootState, CartItem as Item } from '../../../types';
import { selectCartItems } from '../../../selectors';

import './cart-dropdown.style.scss';

interface CartDropdownProps {
  items: Item[];
}

const _CartDropdown: React.FC<CartDropdownProps> = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Button>Go to Checkout</Button>
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, CartDropdownProps>({
  items: selectCartItems,
});

export const CartDropdown = connect(mapStateToProps)(_CartDropdown);
