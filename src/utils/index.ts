import { CSSProperties } from 'react';

import { CartItem } from '../types';

export const createBGImageStyle = (imageURL: string): CSSProperties => ({
  backgroundImage: `url(${imageURL})`,
});

export const updateCartItemQuantity = (
  currentItems: CartItem[],
  newItem: CartItem,
): CartItem[] => {
  const existingItem = currentItems.find(({ id }) => newItem.id === id);

  if (existingItem) {
    return currentItems.map(item => {
      const { id, quantity } = item;

      return id !== newItem.id
        ? item
        : {
            ...item,
            quantity: quantity ? quantity + 1 : 1,
          };
    });
  }

  return [...currentItems, { ...newItem, quantity: 1 }];
};
