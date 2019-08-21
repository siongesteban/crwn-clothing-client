import { ActionType, Collections, SetShopCollections } from 'types';

export const setShopCollections = (
  collections: Collections,
): SetShopCollections => ({
  type: ActionType.SET_SHOP_COLLECTIONS,
  payload: { collections },
});
