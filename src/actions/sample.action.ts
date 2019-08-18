import { ActionType, UpdateSampleName, UpdateSampleAge } from '../types';

export const updateSampleName = (name: string): UpdateSampleName => ({
  type: ActionType.UPDATE_SAMPLE_NAME,
  payload: { name },
});

export const updateSampleAge = (age: number): UpdateSampleAge => ({
  type: ActionType.UPDATE_SAMPLE_AGE,
  payload: { age },
});
