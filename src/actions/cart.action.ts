import {
  ActionType,
  CartItem,
  Item,
  AddItemToCart,
  ClearItemFromCart,
  RemoveItemFromCart,
  ToggleCart
} from 'types';

export const addItemToCart = (item: Item): AddItemToCart => ({
  type: ActionType.ADD_ITEM_TO_CART,
  payload: { item },
});

export const clearItemFromCart = (id: CartItem['id']): ClearItemFromCart => ({
  type: ActionType.CLEAR_ITEM_FROM_CART,
  payload: { id },
});

export const removeItemFromCart = (id: CartItem['id']): RemoveItemFromCart => ({
  type: ActionType.REMOVE_ITEM_FROM_CART,
  payload: { id },
});

export const toggleCart = (): ToggleCart => ({
  type: ActionType.TOGGLE_CART,
});
