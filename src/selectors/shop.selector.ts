import { createSelector } from 'reselect';

import { RootState, Collection } from 'types';

const selectShop = ({ shop }: RootState) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections as Collection[],
);
