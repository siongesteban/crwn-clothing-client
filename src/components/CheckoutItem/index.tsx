import React from 'react';

import './checkout-item.style.scss';
import { CartItem } from '../../types';

interface CheckoutItemProps {
  item: CartItem;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({
  item: { name, imageURL, quantity, price },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageURL} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);
