export abstract class BaseService<T1, T2> {
  protected abstract client: T2;

  abstract async get(id: string): Promise<T1 | null>;
  abstract async create(data: T1): Promise<T1 | null>;
}
