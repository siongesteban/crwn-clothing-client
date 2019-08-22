import { ShopState, Action, ActionType } from 'types';

const INITIAL_STATE: ShopState = {
  collections: null,
};

export const shopReducer = (
  state: ShopState = INITIAL_STATE,
  action: Action,
): ShopState => {
  switch (action.type) {
    case ActionType.SET_SHOP_COLLECTIONS:
      const { collections } = action.payload;
      return { ...state, collections };
    default:
      return state;
  }
};
