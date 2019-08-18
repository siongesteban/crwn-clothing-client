import React from 'react';

import { ReactComponent as BagIcon } from '../../../assets/crwn_clothing_shopping_bag_icon.svg';

import './cart-icon.style.scss';

export const CartIcon: React.FC = () => (
  <div className="cart-icon">
    <BagIcon className="bag-icon" />
    <span className="item-count">0</span>
  </div>
);
