import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { RootState, CartItem as Item } from 'types';
import { CartItem } from 'components';
import { toggleCart } from 'actions';
import { selectCartItems } from 'selectors';

import { S } from './CartDropdown.style';

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
    <S.Wrapper>
      <S.Items>
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.Items>
      <S.Button onClick={handleGoToCheckoutClick}>Go to Checkout</S.Button>
    </S.Wrapper>
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
