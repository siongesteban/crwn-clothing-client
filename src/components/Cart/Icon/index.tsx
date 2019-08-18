import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../../types';
import { toggleCart } from '../../../actions';
import { selectCartTotalQuantity } from '../../../selectors';

import { ReactComponent as BagIcon } from '../../../assets/crwn_clothing_shopping_bag_icon.svg';
import './cart-icon.style.scss';

interface CartIconProps {
  totalQuantity: number;
  toggleCart: typeof toggleCart;
}

type DesiredSelection = Pick<CartIconProps, 'totalQuantity'>;

const _CartIcon: React.FC<CartIconProps> = ({ toggleCart, totalQuantity }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <BagIcon className="bag-icon" />
    <span className="item-count">{totalQuantity}</span>
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  totalQuantity: selectCartTotalQuantity,
});

const dispatchProps = { toggleCart };

export const CartIcon = connect(
  mapStateToProps,
  dispatchProps,
)(_CartIcon);
