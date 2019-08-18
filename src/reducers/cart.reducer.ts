import { CartState, Action, ActionType, CartItem } from '../types';
import { updateCartItemQuantity } from '../utils';

const INITIAL_STATE: CartState = {
  hidden: true,
  items: [],
};

export const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: Action,
): CartState => {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: updateCartItemQuantity(
          state.items as CartItem[],
          action.payload.item,
        ),
      };
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
