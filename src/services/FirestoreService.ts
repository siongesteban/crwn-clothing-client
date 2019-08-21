import { Model } from 'types';
import { BaseService } from 'services';
import { firebase } from 'services/clients';

type Firestore = firebase.firestore.Firestore;
type CollectionReference = firebase.firestore.CollectionReference;

export class FirestoreService<T extends Model> extends BaseService<
  T,
  Firestore
> {
  protected client: Firestore;
  private collection: CollectionReference;

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
        return null;
      }

      const result = doc.data() as T;

      return result;
    } catch (e) {
      console.error('@FirestoreService::get', e.message);
      return null;
    }
  }

  async create(data: T) {
    try {
      const doc = this.collection.doc();
      const id = data.uid || doc.id;

      await doc.set({
        ...data,
        id,
        createdAt: new Date(),
      });

      return data;
    } catch (e) {
      console.error('@FirestoreService::create', e.message);
      return null;
    }
  }
}
