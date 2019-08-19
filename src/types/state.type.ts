import { DeepReadonly } from 'utility-types';

import { Job, User, CartItem, Section } from 'types';
import { Collections } from './model.type';

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
  collections: Collections;
}>;

export type UserState = DeepReadonly<User | null>;
