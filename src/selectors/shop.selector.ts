import { createSelector } from 'reselect';

import { RootState, Collection, Collections } from 'types';

const selectShop = ({ shop }: RootState) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections as Collections,
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShop],
  ({ collections }) =>
    Object.keys(collections).map(key => collections[key]) as Collection[],
);

export const selectShopCollection = (collectionId: string) =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionId],
  );
