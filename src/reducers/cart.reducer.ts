import { CartState, Action, ActionType } from '../types';

const INITIAL_STATE: CartState = {
  hidden: true,
};

export const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: Action,
): CartState => {
  switch (action.type) {
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
