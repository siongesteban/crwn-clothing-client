import { Collections, StateError } from 'types';

export enum ShopActionType {
  FETCH_COLLECTIONS_START = '@@shop/FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = '@@shop/FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_ERROR = '@@shop/FETCH_COLLECTIONS_ERROR',
}

export type FetchCollectionsStart = {
  type: ShopActionType.FETCH_COLLECTIONS_START;
};

export type FetchCollectionsSuccess = {
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS;
  payload: {
    collections: Collections;
  };
};

export type FetchCollectionsError = {
  type: ShopActionType.FETCH_COLLECTIONS_ERROR;
  payload: {
    error: StateError;
  };
};

export type ShopAction =
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsError;
