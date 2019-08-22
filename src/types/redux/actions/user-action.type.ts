import { User } from 'types';

export enum UserActionType {
  SET_USER = '@@user/SET',
}

export interface SetUser {
  type: UserActionType.SET_USER;
  payload: {
    user: User | null;
  };
}

export type UserAction = SetUser;
