import React from 'react';
import { connect } from 'react-redux';

import { CartItem } from '../../types';
import { removeItemFromCart } from '../../actions';

import './checkout-item.style.scss';

interface CheckoutItemProps {
  item: CartItem;
  removeItemFromCart: typeof removeItemFromCart;
}

const C: React.FC<CheckoutItemProps> = ({
  removeItemFromCart,
  item: { id, name, imageURL, quantity, price },
}) => {
  const handleRemoveClick = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageURL} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveClick}>
        &#10005;
      </div>
    </div>
  );
};

const dispatchProps = { removeItemFromCart };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const CheckoutItem = CConnected;
