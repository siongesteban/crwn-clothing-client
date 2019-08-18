import React from 'react';
import { connect } from 'react-redux';

import { CartItem } from '../../types';
import { clearItemFromCart } from '../../actions';

import './checkout-item.style.scss';

interface CheckoutItemProps {
  item: CartItem;
  clearItemFromCart: typeof clearItemFromCart;
}

const C: React.FC<CheckoutItemProps> = ({
  clearItemFromCart,
  item: { id, name, imageURL, quantity, price },
}) => {
  const handleRemoveClick = () => {
    clearItemFromCart(id);
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

const dispatchProps = { clearItemFromCart };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const CheckoutItem = CConnected;
