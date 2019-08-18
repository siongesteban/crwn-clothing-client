import { User } from './';

export enum ActionType {
  // sample
  UPDATE_SAMPLE_NAME = '@@sample/UPDATE_NAME',
  UPDATE_SAMPLE_AGE = '@@sample/UPDATE_AGE',

  // user
  SET_USER = '@@user/SET',
}

export interface UpdateSampleName {
  type: ActionType.UPDATE_SAMPLE_NAME;
  payload: {
    name: string;
  };
}

export interface UpdateSampleAge {
  type: ActionType.UPDATE_SAMPLE_AGE;
  payload: {
    age: number;
  };
}

export interface SetUser {
  type: ActionType.SET_USER;
  payload: {
    user: User | null;
  };
}

export type Action = UpdateSampleName | UpdateSampleAge | SetUser;
