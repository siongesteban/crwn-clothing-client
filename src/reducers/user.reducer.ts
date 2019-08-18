import { UserState, Action, ActionType } from '../types';

export const userReducer = (
  state: UserState = null,
  action: Action,
): UserState => {
  switch (action.type) {
    case ActionType.SET_USER:
      return action.payload.user as UserState;
    default:
      return state;
  }
};
