import { combineReducers } from 'redux';

import { RootState } from '../types';

import { sampleReducer } from './sample.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers<RootState>({
  sample: sampleReducer,
  user: userReducer,
});
