import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../../actions';

import { ReactComponent as BagIcon } from '../../../assets/crwn_clothing_shopping_bag_icon.svg';
import './cart-icon.style.scss';

interface CartIconProps {
  toggleCart: typeof toggleCart;
}

const _CartIcon: React.FC<CartIconProps> = ({ toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <BagIcon className="bag-icon" />
    <span className="item-count">0</span>
  </div>
);

const dispatchProps = { toggleCart };

export const CartIcon = connect(
  undefined,
  dispatchProps,
)(_CartIcon);
