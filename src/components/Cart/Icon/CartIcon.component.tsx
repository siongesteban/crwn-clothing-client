import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from 'types';
import { toggleCart } from 'actions';
import { selectCartTotalQuantity } from 'selectors';

import { S } from './CartIcon.style';

interface Props {
  totalQuantity: number;
  toggleCart: typeof toggleCart;
}

type DesiredSelection = Pick<Props, 'totalQuantity'>;

const _CartIcon: React.FC<Props> = ({ toggleCart, totalQuantity }) => (
  <S.Wrapper onClick={toggleCart}>
    <S.BagIcon />
    <S.ItemCount>{totalQuantity}</S.ItemCount>
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  totalQuantity: selectCartTotalQuantity,
});

const dispatchProps = { toggleCart };

export const CartIcon = connect(
  mapStateToProps,
  dispatchProps,
)(_CartIcon);
