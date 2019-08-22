import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { localforage } from 'services/clients';
import { rootReducer } from 'reducers';
import { shopSaga } from 'sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const persistConfig: PersistConfig = {
    key: 'app',
    storage: localforage,
    whitelist: ['cart'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);

  sagaMiddleware.run(shopSaga);

  return { store, persistor };
};
