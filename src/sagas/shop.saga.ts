import { takeLatest, all, put, call } from 'redux-saga/effects';

import { ActionType, Collections, Collection } from 'types';
import { collectionService } from 'services';
import { fetchCollectionsSuccess, fetchCollectionsError } from 'actions';

export function* shopSaga() {
  yield all([call(watchFetchCollectionsStart)]);
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

    console.error('@fetchCollections', message);

    yield put(fetchCollectionsError({ message }));
  }
}

function* watchFetchCollectionsStart() {
  yield takeLatest(ActionType.FETCH_COLLECTIONS_START, fetchCollectionsWorker);
}
