import { UserState, Action, ActionType } from 'types';

const INITIAL_STATE: UserState = {
  data: null,
  error: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: Action,
): UserState => {
  switch (action.type) {
    case ActionType.SIGN_IN_SUCCESS:
    case ActionType.SIGN_UP_SUCCESS:
      const { user } = action.payload;
      return { ...state, data: user, error: null };
    case ActionType.SIGN_IN_ERROR:
    case ActionType.SIGN_UP_ERROR:
    case ActionType.SIGN_OUT_ERROR:
      const { error } = action.payload;
      return { ...state, error };
    case ActionType.SIGN_OUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
