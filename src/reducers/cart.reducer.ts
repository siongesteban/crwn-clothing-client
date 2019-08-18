import { CartState, Action, ActionType, CartItem } from '../types';
import { increaseCartItemQuantity, decreaseCartItemQuantity } from '../utils';

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
        items: increaseCartItemQuantity(
          state.items as CartItem[],
          action.payload.item,
        ),
      };
    case ActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id),
      };
    case ActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: decreaseCartItemQuantity(
          state.items as CartItem[],
          action.payload.id,
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
