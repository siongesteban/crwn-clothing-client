import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { Button } from '../../common';
import { CartItem } from '../Item';

import { RootState, CartItem as Item } from '../../../types';
import { toggleCart } from '../../../actions';
import { selectCartItems } from '../../../selectors';

import './cart-dropdown.style.scss';

interface CartDropdownProps extends RouteComponentProps {
  items: Item[];
  toggleCart: typeof toggleCart;
}

type DesiredSelection = Pick<CartDropdownProps, 'items'>;

const C: React.FC<CartDropdownProps> = ({ items, history, toggleCart }) => {
  const handleGoToCheckoutClick = () => {
    toggleCart();
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleGoToCheckoutClick}>Go to Checkout</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  items: selectCartItems,
});
const dispatchProps = { toggleCart };

const CConnected = connect(
  mapStateToProps,
  dispatchProps,
)(C);
const CWithRouter = withRouter(CConnected);

export const CartDropdown = CWithRouter;
