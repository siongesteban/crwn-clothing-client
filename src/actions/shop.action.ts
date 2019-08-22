import {
  ActionType,
  Collections,
  FetchCollectionsSuccess,
  StateError,
  FetchCollectionsError,
  FetchCollectionsStart
} from 'types';

export const fetchCollections = (): FetchCollectionsStart => ({
  type: ActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
  collections: Collections,
): FetchCollectionsSuccess => ({
  type: ActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: { collections },
});

export const fetchCollectionsError = (
  error: StateError,
): FetchCollectionsError => ({
  type: ActionType.FETCH_COLLECTIONS_ERROR,
  payload: { error },
});
