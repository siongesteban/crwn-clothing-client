import { combineReducers } from 'redux';

import { RootState } from '../types';

import { cartReducer } from './cart.reducer';
import { sampleReducer } from './sample.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
  sample: sampleReducer,
  user: userReducer,
});
