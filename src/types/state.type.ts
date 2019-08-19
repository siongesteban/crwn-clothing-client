import { DeepReadonly } from 'utility-types';

import { Job, User, CartItem, Section, Collection } from 'types';

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
  collections: Collection[];
}>;

export type UserState = DeepReadonly<User | null>;
