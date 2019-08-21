import React from 'react';
import { connect } from 'react-redux';

import { CartItem } from 'types';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from 'actions';

import { S } from './CheckoutItem.style';

interface Props {
  item: CartItem;
  addItemToCart: typeof addItemToCart;
  clearItemFromCart: typeof clearItemFromCart;
  removeItemFromCart: typeof removeItemFromCart;
}

const C: React.FC<Props> = ({
  item,
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
}) => {
  const handleIncrementClick = () => {
    addItemToCart(item);
  };

  const handleDecrementClick = () => {
    removeItemFromCart(id);
  };

  const handleRemoveClick = () => {
    clearItemFromCart(id);
  };

  const { id, name, imageURL, quantity, price } = item;

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={imageURL} alt={name} />
      </S.ImageWrapper>
      <S.Text>{name}</S.Text>
      <S.QuantityWrapper>
        <div onClick={handleDecrementClick}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={handleIncrementClick}>&#10095;</div>
      </S.QuantityWrapper>
      <S.Text>{price}</S.Text>
      <S.RemoveButton onClick={handleRemoveClick}>&#10005;</S.RemoveButton>
    </S.Wrapper>
  );
};

const dispatchProps = { addItemToCart, clearItemFromCart, removeItemFromCart };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const CheckoutItem = CConnected;
