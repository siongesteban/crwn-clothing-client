import { CartItem, User } from 'types';
import { Collections } from './model.type';

/*
 * Action Types
 */
export enum ActionType {
  // sample
  UPDATE_SAMPLE_NAME = '@@sample/UPDATE_NAME',
  UPDATE_SAMPLE_AGE = '@@sample/UPDATE_AGE',

  // cart
  ADD_ITEM_TO_CART = '@@cart/ADD_ITEM',
  CLEAR_ITEM_FROM_CART = '@@cart/CLEAR_ITEM',
  REMOVE_ITEM_FROM_CART = '@@cart/REMOVE_ITEM',
  TOGGLE_CART = '@@cart/TOGGLE',

  // shop
  SET_SHOP_COLLECTIONS = '@@shop/SET_COLLECTIONS',

  // user
  SET_USER = '@@user/SET',
}

/*
 * Actions
 */

// Sample
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

// Cart
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

// Shop
export type SetShopCollections = {
  type: ActionType.SET_SHOP_COLLECTIONS;
  payload: {
    collections: Collections;
  };
};

// User
export interface SetUser {
  type: ActionType.SET_USER;
  payload: {
    user: User | null;
  };
}

export type Action =
  | AddItemToCart
  | ClearItemFromCart
  | RemoveItemFromCart
  | SetShopCollections
  | SetUser
  | ToggleCart
  | UpdateSampleAge
  | UpdateSampleName;
