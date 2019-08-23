import { takeLatest, all, put, call } from 'redux-saga/effects';

import { ActionType, Collections, Collection } from 'types';
import { collectionService } from 'services';
import { fetchCollectionsSuccess, fetchCollectionsError } from 'actions';

export function* shopSagas() {
  yield all([call(watchFetchCollections)]);
}

function* watchFetchCollections() {
  yield takeLatest(ActionType.FETCH_COLLECTIONS_START, fetchCollectionsWorker);
}

function* fetchCollectionsWorker() {
  try {
    const fetchedCollections: Collection[] = yield call(
      { context: collectionService, fn: collectionService.find },
      {
        subItemKeys: ['items'],
      },
    );

    const collections = fetchedCollections.reduce(
      (accumulator, collection) => {
        accumulator[collection.title.toLocaleLowerCase()] = collection;

        return accumulator;
      },
      {} as Collections,
    );

    yield put(fetchCollectionsSuccess(collections));
  } catch (e) {
    const { message } = e;

    console.error('@fetchCollectionsWorker', message);

    yield put(fetchCollectionsError({ message }));
  }
}
