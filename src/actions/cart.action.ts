import { ActionType, ToggleCart, Item, AddItemToCart } from '../types';

export const addItemToCart = (item: Item): AddItemToCart => ({
  type: ActionType.ADD_ITEM_TO_CART,
  payload: { item },
});

export const toggleCart = (): ToggleCart => ({
  type: ActionType.TOGGLE_CART,
});
