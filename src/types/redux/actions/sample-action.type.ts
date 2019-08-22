export enum SampleActionType {
  UPDATE_SAMPLE_NAME = '@@sample/UPDATE_NAME',
  UPDATE_SAMPLE_AGE = '@@sample/UPDATE_AGE',
}

export interface UpdateSampleName {
  type: SampleActionType.UPDATE_SAMPLE_NAME;
  payload: {
    name: string;
  };
}

export interface UpdateSampleAge {
  type: SampleActionType.UPDATE_SAMPLE_AGE;
  payload: {
    age: number;
  };
}

export type SampleAction = UpdateSampleName | UpdateSampleAge;
