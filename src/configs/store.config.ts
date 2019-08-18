import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';

import { rootReducer } from '../reducers';

export const configureStore = () => {
  const middlewares = [logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);

  return store;
};
