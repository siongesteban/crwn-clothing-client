import React from 'react';

import { Button } from '../../common';

import './cart-dropdown.style.scss';

export const CartDropdown: React.FC = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>Go to Checkout</Button>
  </div>
);
