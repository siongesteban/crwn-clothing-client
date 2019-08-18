import { ActionType, SetUser, User } from '../types';

export const setUser = (user: User | null): SetUser => ({
  type: ActionType.SET_USER,
  payload: { user },
});
