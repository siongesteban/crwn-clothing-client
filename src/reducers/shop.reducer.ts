import { ShopState, Action, ActionType } from 'types';

const INITIAL_STATE: ShopState = {
  collections: null,
  isFetching: false,
  error: null,
};

export const shopReducer = (
  state: ShopState = INITIAL_STATE,
  action: Action,
): ShopState => {
  switch (action.type) {
    case ActionType.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ActionType.FETCH_COLLECTIONS_SUCCESS:
      const { collections } = action.payload;
      return { ...state, collections, isFetching: false };
    case ActionType.FETCH_COLLECTIONS_ERROR:
      const { error } = action.payload;
      return { ...state, error, isFetching: false };
    default:
      return state;
  }
};
