import { DeepReadonly } from 'utility-types';

export interface Item {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

export type Section = Pick<Item, 'id' | 'imageURL'> & {
  linkURL?: string;
  size?: string;
  title: string;
};

export type Collection = Pick<Section, 'id' | 'title'> & {
  path: string;
  items: Item[];
};

export type InputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
) => void;

export type ObjectSet<T = { [key: string]: any }> = {
  [key in keyof T]: T[keyof T]
};

export type FirebaseUser = firebase.User | null;

export interface Model {
  id?: string;
  createdAt?: Date;
  uid?: string;
}

export interface User extends Model {
  displayName: string;
  email: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export type AuthCallback<T = User> = (user?: T) => void;

export interface Job {
  title: string;
  description: string;
}

export type SampleState = DeepReadonly<{
  name: string;
  age: number;
  job: Job;
}>;

export interface RootState {
  sample: SampleState;
}

export enum ActionType {
  UPDATE_SAMPLE_NAME = '@@sample/UPDATE_NAME',
  UPDATE_SAMPLE_AGE = '@@sample/UPDATE_AGE',
}

export interface UpdateSampleNameAction {
  type: ActionType.UPDATE_SAMPLE_NAME;
  payload: {
    name: string;
  };
}

export interface UpdateSampleAgeAction {
  type: ActionType.UPDATE_SAMPLE_AGE;
  payload: {
    age: number;
  };
}

export type Action = UpdateSampleNameAction | UpdateSampleAgeAction;
