import { createSelector } from 'reselect';

import { RootState, Collection, Collections } from 'types';

const selectShop = ({ shop }: RootState) => shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections as Collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  ({ collections }) =>
    !collections
      ? ([] as Collection[])
      : (Object.keys(collections).map(key => collections[key]) as Collection[]),
);

export const selectCollection = (collectionId: string) =>
  createSelector(
    [selectCollections],
    collections => (!collections ? null : collections[collectionId]),
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  ({ isFetching }) => isFetching,
);
