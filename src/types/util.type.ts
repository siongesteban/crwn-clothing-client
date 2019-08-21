import { Model } from './model.type';

export type ObjectSet<T = { [key: string]: any }> = {
  [key in keyof T]: T[keyof T]
};

export enum OperationType {
  CREATE,
}

export type FirestoreBatchDocs<T = Model> = Array<{
  ref: firebase.firestore.DocumentReference;
  data: T;
}>;
