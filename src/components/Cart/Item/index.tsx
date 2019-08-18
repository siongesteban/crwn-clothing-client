import React from 'react';

import './cart-item.style.scss';
import { CartItem as Item } from '../../../types';

interface CartItemProps {
  item: Item;
}

export const CartItem: React.FC<CartItemProps> = ({
  item: { imageURL, name, price, quantity },
}) => (
  <div className="cart-item">
    <img src={imageURL} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
);
