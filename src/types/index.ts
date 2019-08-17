export interface Item {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

export type Section = Pick<Item, 'id' | 'imageURL'> & {
  linkURL?: string;
  size?: string;
  title: string;
};

export type Collection = Pick<Section, 'id' | 'title'> & {
  path: string;
  items: Item[];
};

export type InputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
) => void;

export type ObjectSet<T = { [key: string]: any }> = {
  [key in keyof T]: T[keyof T]
};

export type FirebaseUser = firebase.User | null;

export interface User {
  displayName: string;
  email: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  phoneNumber?: string;
  uid?: string;
}

export interface SigninCredentials {
  username?: string;
  email?: string;
  password: string;
}

export type AuthCallback<T = User> = (user?: T) => void;
