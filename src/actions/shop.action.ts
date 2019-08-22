import { Dispatch } from 'redux';

import {
  ActionType,
  Collections,
  FetchCollectionsSuccess,
  StateError,
  FetchCollectionsError,
  FetchCollectionsStart
} from 'types';
import { CollectionService } from 'services';

export const fetchCollectionsStart = (): FetchCollectionsStart => ({
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

export const fetchCollections = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCollectionsStart());

    const fetchedCollections = await CollectionService.getInstance().find({
      subItemKeys: ['items'],
    });

    const collections = fetchedCollections.reduce(
      (accumulator, collection) => {
        accumulator[collection.title.toLocaleLowerCase()] = collection;

        return accumulator;
      },
      {} as Collections,
    );

    dispatch(fetchCollectionsSuccess(collections));
  } catch (e) {
    const { message } = e;

    console.error('@fetchCollections', message);

    dispatch(fetchCollectionsError({ message }));
  }
};
