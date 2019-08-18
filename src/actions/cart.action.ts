import {
  ActionType,
  AddItemToCart,
  CartItem,
  Item,
  ToggleCart
} from '../types';

export const addItemToCart = (item: Item): AddItemToCart => ({
  type: ActionType.ADD_ITEM_TO_CART,
  payload: { item },
});

export const removeItemFromCart = (id: CartItem['id']) => ({
  type: ActionType.REMOVE_ITEM_FROM_CART,
  payload: { id },
});

export const toggleCart = (): ToggleCart => ({
  type: ActionType.TOGGLE_CART,
});
