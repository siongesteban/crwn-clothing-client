import React from 'react';
import { connect } from 'react-redux';

import { CartItem } from 'types';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from 'actions';

import './checkout-item.style.scss';

interface CheckoutItemProps {
  item: CartItem;
  addItemToCart: typeof addItemToCart;
  clearItemFromCart: typeof clearItemFromCart;
  removeItemFromCart: typeof removeItemFromCart;
}

const C: React.FC<CheckoutItemProps> = ({
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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageURL} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrementClick}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrementClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveClick}>
        &#10005;
      </div>
    </div>
  );
};

const dispatchProps = { addItemToCart, clearItemFromCart, removeItemFromCart };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const CheckoutItem = CConnected;
