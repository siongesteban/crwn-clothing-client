export abstract class BaseService<T> {
  protected abstract client: any;

  abstract async get(id: string): Promise<T | undefined>;
  abstract async create(data: T): Promise<T | undefined>;
}
