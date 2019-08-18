import { ActionType, ToggleCart } from '../types';

export const toggleCart = (): ToggleCart => ({
  type: ActionType.TOGGLE_CART,
});
