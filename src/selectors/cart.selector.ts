import { createSelector } from 'reselect';

import { RootState, CartItem } from 'types';

const selectCart = ({ cart }: RootState) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  ({ items }) => items as CartItem[],
);

export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  items =>
    items.reduce(
      (currentCount, { quantity }) => (quantity ? currentCount + quantity : 0),
      0,
    ),
);

export const selectCartToggleStatus = createSelector(
  [selectCart],
  ({ hidden }) => hidden,
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  items =>
    items.reduce(
      (currentTotal, { price, quantity }) =>
        quantity ? currentTotal + price * quantity : 0,
      0,
    ),
);
