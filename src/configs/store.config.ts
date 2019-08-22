import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { localforage } from 'services/clients';
import { rootReducer } from 'reducers';

export const configureStore = () => {
  const middlewares = [thunk, logger];
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

  return { store, persistor };
};
