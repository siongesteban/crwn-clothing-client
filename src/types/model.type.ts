export type Collection = Pick<Section, 'id' | 'title'> & {
  path: string;
  items: Item[];
};

export type FirebaseUser = firebase.User | null;

export interface CartItem extends Item {
  quantity?: number;
}

export interface Item {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

export interface Job {
  title: string;
  description: string;
}

export interface Model {
  id?: string;
  createdAt?: Date;
  uid?: string;
}

export type Section = Pick<Item, 'id' | 'imageURL'> & {
  linkURL?: string;
  size?: string;
  title: string;
};

export interface User extends Model {
  displayName: string;
  email: string;
}
