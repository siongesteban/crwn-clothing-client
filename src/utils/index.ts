import { CSSProperties } from 'react';
import { createBrowserHistory } from 'history';

import { CartItem } from 'types';

export const history = createBrowserHistory();

export const createBGImageStyle = (imageURL: string): CSSProperties => ({
  backgroundImage: `url(${imageURL})`,
});

const getExistingCartItem = (items: CartItem[], itemToFind: CartItem['id']) =>
  items.find(({ id }) => id === itemToFind);

export const increaseCartItemQuantity = (
  currentItems: CartItem[],
  newItem: CartItem,
): CartItem[] => {
  const existingItem = getExistingCartItem(currentItems, newItem.id);

  if (existingItem) {
    return currentItems.map(item => {
      const { id, quantity = 0 } = item;

      return id !== newItem.id
        ? item
        : {
            ...item,
            quantity: quantity + 1,
          };
    });
  }

  return [...currentItems, { ...newItem, quantity: 1 }];
};

export const decreaseCartItemQuantity = (
  currentItems: CartItem[],
  itemToRemove: CartItem['id'],
): CartItem[] => {
  const existingItem = getExistingCartItem(currentItems, itemToRemove);

  if (existingItem && existingItem.quantity === 1) {
    return currentItems.filter(({ id }) => id !== itemToRemove);
  }

  return currentItems.map(item => {
    const { id, quantity = 0 } = item;

    return id !== itemToRemove
      ? item
      : {
          ...item,
          quantity: quantity - 1,
        };
  });
};
