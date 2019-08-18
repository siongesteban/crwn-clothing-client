import { DeepReadonly } from 'utility-types';

import { Job } from './';

export interface RootState {
  sample: SampleState;
}

export type SampleState = DeepReadonly<{
  name: string;
  age: number;
  job: Job;
}>;
