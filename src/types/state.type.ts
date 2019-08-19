import { DeepReadonly } from 'utility-types';

import { Job, User, CartItem, Section } from 'types';

export interface RootState {
  cart: CartState;
  directory: DirectoryState;
  sample: SampleState;
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

export type UserState = DeepReadonly<User | null>;
