import { CartItem, User } from 'types';

export enum ActionType {
  // sample
  UPDATE_SAMPLE_NAME = '@@sample/UPDATE_NAME',
  UPDATE_SAMPLE_AGE = '@@sample/UPDATE_AGE',

  // cart
  ADD_ITEM_TO_CART = '@@cart/ADD_ITEM',
  CLEAR_ITEM_FROM_CART = '@@cart/CLEAR_ITEM',
  REMOVE_ITEM_FROM_CART = '@@cart/REMOVE_ITEM',
  TOGGLE_CART = '@@cart/TOGGLE',

  // user
  SET_USER = '@@user/SET',
}

export interface UpdateSampleName {
  type: ActionType.UPDATE_SAMPLE_NAME;
  payload: {
    name: string;
  };
}

export interface UpdateSampleAge {
  type: ActionType.UPDATE_SAMPLE_AGE;
  payload: {
    age: number;
  };
}

export interface SetUser {
  type: ActionType.SET_USER;
  payload: {
    user: User | null;
  };
}

export interface ToggleCart {
  type: ActionType.TOGGLE_CART;
}

export interface AddItemToCart {
  type: ActionType.ADD_ITEM_TO_CART;
  payload: {
    item: CartItem;
  };
}

export interface ClearItemFromCart {
  type: ActionType.CLEAR_ITEM_FROM_CART;
  payload: {
    id: CartItem['id'];
  };
}

export type RemoveItemFromCart = Pick<ClearItemFromCart, 'payload'> & {
  type: ActionType.REMOVE_ITEM_FROM_CART;
};

export type Action =
  | AddItemToCart
  | ClearItemFromCart
  | RemoveItemFromCart
  | SetUser
  | ToggleCart
  | UpdateSampleAge
  | UpdateSampleName;
