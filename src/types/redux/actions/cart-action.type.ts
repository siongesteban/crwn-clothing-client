import { CartItem } from 'types';

export enum CartActionType {
  ADD_ITEM_TO_CART = '@@cart/ADD_ITEM',
  CLEAR_ITEM_FROM_CART = '@@cart/CLEAR_ITEM',
  REMOVE_ITEM_FROM_CART = '@@cart/REMOVE_ITEM',
  TOGGLE_CART = '@@cart/TOGGLE',
  CLEAR_CART = '@@cart/CLEAR',
}

export interface ToggleCart {
  type: CartActionType.TOGGLE_CART;
}

export interface AddItemToCart {
  type: CartActionType.ADD_ITEM_TO_CART;
  payload: {
    item: CartItem;
  };
}

export interface ClearItemFromCart {
  type: CartActionType.CLEAR_ITEM_FROM_CART;
  payload: {
    id: CartItem['id'];
  };
}

export type RemoveItemFromCart = Pick<ClearItemFromCart, 'payload'> & {
  type: CartActionType.REMOVE_ITEM_FROM_CART;
};

export type ClearCart = {
  type: CartActionType.CLEAR_CART;
};

export type CartAction =
  | ToggleCart
  | AddItemToCart
  | ClearItemFromCart
  | RemoveItemFromCart
  | ClearCart;
