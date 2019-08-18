import {
  ActionType,
  UpdateSampleNameAction,
  UpdateSampleAgeAction
} from '../types';

export const updateSampleName = (name: string): UpdateSampleNameAction => ({
  type: ActionType.UPDATE_SAMPLE_NAME,
  payload: { name },
});

export const updateSampleAge = (age: number): UpdateSampleAgeAction => ({
  type: ActionType.UPDATE_SAMPLE_AGE,
  payload: { age },
});
