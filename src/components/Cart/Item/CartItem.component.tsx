import React from 'react';

import { CartItem as Item } from 'types';

import { S } from './CartItem.style';

interface CartItemProps {
  item: Item;
}

export const CartItem: React.FC<CartItemProps> = ({
  item: { imageURL, name, price, quantity },
}) => (
  <S.Wrapper>
    <S.Image src={imageURL} alt={name} />
    <S.ItemDetails>
      <span>{name}</span>
      <span>
        {price} x {quantity}
      </span>
    </S.ItemDetails>
  </S.Wrapper>
);
