import { DeepReadonly } from 'utility-types';

import { Job, User } from './';

export interface RootState {
  cart: CartState;
  sample: SampleState;
  user: UserState;
}

export type SampleState = DeepReadonly<{
  name: string;
  age: number;
  job: Job;
}>;

export type UserState = DeepReadonly<User | null>;

export type CartState = DeepReadonly<{
  hidden: boolean;
}>;
