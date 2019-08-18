import { combineReducers } from 'redux';

import { RootState } from '../types';
import { sampleReducer } from './sample.reducer';

export const rootReducer = combineReducers<RootState>({
  sample: sampleReducer,
});
