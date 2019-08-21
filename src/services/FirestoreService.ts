import { Model, OperationType, FirestoreBatchDocs } from 'types';
import { BaseService } from 'services';
import { firebase } from 'services/clients';

type Firestore = firebase.firestore.Firestore;
type CollectionReference = firebase.firestore.CollectionReference;

export class FirestoreService<T extends Model> extends BaseService<
  T,
  Firestore
> {
  protected client: Firestore;
  protected collection: CollectionReference;

  constructor(path: string) {
    super();

    this.client = firebase.firestore();
    this.collection = this.client.collection(path);
  }

  async find(params: { subItemKeys?: string[] } = {}) {
    const { subItemKeys } = params;
    const { docs } = await this.collection.get();

    const result: T[] = [];

    for (const doc of docs) {
      const data = doc.data() as T;
      const tempData = data as any;

      if (subItemKeys && subItemKeys.length) {
        for (const subItemKey of subItemKeys) {
          const { docs: subItems } = await doc.ref.collection(subItemKey).get();

          if (subItems.length) {
            tempData[subItemKey] = subItems.map(subItem => subItem.data());
          }
        }
      }

      result.push(tempData as T);
    }

    return result;
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

  async batchCreate(data: T[], subItemKeys?: string[]) {
    try {
      const batchDocs: FirestoreBatchDocs = [];

      data.forEach(item => {
        const doc = this.collection.doc();

        if (subItemKeys && subItemKeys.length) {
          subItemKeys.forEach(subItemKey => {
            const newSubItems = doc.collection(subItemKey);
            const tempItem = item as any;

            (tempItem[subItemKey] || []).forEach((item: any) => {
              const newItem = newSubItems.doc();

              batchDocs.push({
                ref: newItem,
                data: item,
              });
            });

            delete tempItem[subItemKey];
          });
        }

        batchDocs.push({
          ref: doc,
          data: item,
        });
      });

      await this.performBatch(batchDocs, OperationType.CREATE);

      return data;
    } catch (e) {
      console.error('@FirestoreService::batchCreate', e.message);
      return [];
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

  protected performBatch<T extends Model>(
    docs: FirestoreBatchDocs<T>,
    operationType: OperationType,
  ): Promise<void> {
    const batch = this.client.batch();

    if (operationType === OperationType.CREATE) {
      docs.forEach(({ ref, data }) => {
        batch.set(ref, {
          ...data,
          id: ref.id,
          createdAt: new Date(),
        });
      });
    }

    return batch.commit();
  }
}
