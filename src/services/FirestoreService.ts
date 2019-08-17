import uuid from 'uuid/v4';

import { Model } from '../types';
import { firebase } from './clients';
import { BaseService } from './BaseService';

export class FirestoreService<T extends Model> extends BaseService<T> {
  protected client: firebase.firestore.Firestore;
  private collection: firebase.firestore.CollectionReference;

  constructor(path: string) {
    super();

    this.client = firebase.firestore();
    this.collection = this.client.collection(path);
  }

  async get(id: string) {
    try {
      const ref = this.collection.doc(id);
      const doc = await ref.get();

      if (!doc.exists) {
        return undefined;
      }

      const result = doc.data() as T;

      return result;
    } catch (e) {
      console.error('@FirestoreService::get', e.message);
    }
  }

  async create(data: T) {
    try {
      const id = data.uid || uuid();

      delete data.uid;

      const doc = this.collection.doc(id);

      await doc.set({
        id,
        createdAt: new Date(),
        ...data,
      });

      return data;
    } catch (e) {
      console.error('@FirestoreService::create', e.message);
    }
  }
}