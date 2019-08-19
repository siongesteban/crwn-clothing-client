import { SampleState, Action, ActionType } from 'types';

const INITIAL_STATE: SampleState = {
  name: 'John',
  age: 99,
  job: {
    title: 'Developer',
    description: 'React Developer',
  },
};

export const sampleReducer = (
  state: SampleState = INITIAL_STATE,
  action: Action,
): SampleState => {
  switch (action.type) {
    case ActionType.UPDATE_SAMPLE_NAME:
      const { name } = action.payload;

      return {
        ...state,
        name,
      };
    case ActionType.UPDATE_SAMPLE_AGE:
      const { age } = action.payload;

      return {
        ...state,
        age,
      };
    default:
      return state;
  }
};
