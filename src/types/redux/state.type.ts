import { DeepReadonly } from 'utility-types';

import { Collections, Job, User, CartItem, Section } from 'types';

export interface StateError {
  message: string;
  data?: any;
}

export interface RootState {
  cart: CartState;
  directory: DirectoryState;
  sample: SampleState;
  shop: ShopState;
  user: UserState;
}

export type CartState = DeepReadonly<{
  hidden: boolean;
  items: CartItem[];
}>;

export type DirectoryState = DeepReadonly<{
  sections: Section[];
}>;

export type SampleState = DeepReadonly<{
  name: string;
  age: number;
  job: Job;
}>;

export type ShopState = DeepReadonly<{
  collections: Collections | null;
  isFetching: boolean;
  error: StateError | null;
}>;

export type UserState = DeepReadonly<User | null>;
