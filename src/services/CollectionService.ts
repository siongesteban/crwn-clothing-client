import { Collection } from 'types';
// import { Collection, FirestoreBatchDocs, Item, OperationType } from 'types';
import { FirestoreService } from 'services';

export class CollectionService extends FirestoreService<Collection> {
  private static instance: CollectionService;

  constructor() {
    super('collections');
  }

  static getInstance(): CollectionService {
    if (!CollectionService.instance) {
      CollectionService.instance = new CollectionService();
    }

    return CollectionService.instance;
  }

  async batchCreate(collection: Collection[]) {
    try {
      await super.batchCreate(collection, ['items']);

      return collection;
    } catch (e) {
      console.error('@CollectionService::batchCreate', e.message);
      return [];
    }
  }
}

export const collectionService = CollectionService.getInstance();
