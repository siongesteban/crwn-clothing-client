import { CartItem, User } from 'types';
import { Collections } from './model.type';
import { StateError } from './state.type';

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
  FETCH_COLLECTIONS_START = '@@shop/FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = '@@shop/FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_ERROR = '@@shop/FETCH_COLLECTIONS_ERROR',

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
export type FetchCollectionsStart = {
  type: ActionType.FETCH_COLLECTIONS_START;
};

export type FetchCollectionsSuccess = {
  type: ActionType.FETCH_COLLECTIONS_SUCCESS;
  payload: {
    collections: Collections;
  };
};

export type FetchCollectionsError = {
  type: ActionType.FETCH_COLLECTIONS_ERROR;
  payload: {
    error: StateError;
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
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsError
  | SetUser
  | ToggleCart
  | UpdateSampleAge
  | UpdateSampleName;
