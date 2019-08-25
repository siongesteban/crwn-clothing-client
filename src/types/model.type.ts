import { charges } from 'stripe';
import { Token } from 'react-stripe-checkout';

export enum SectionSize {
  LARGE = 'large',
}

export type ImageURL = string;
export type Name = string;
export type Title = string;

export type FirebaseUser = firebase.User | null;

export interface Model {
  id?: string;
  createdAt?: Date;
  uid?: string;
}

export interface CartItem extends Item {
  quantity?: number;
}

export type Collection = Model & {
  title: Title;
  path: string;
  items: Item[];
};

export type Collections = { [key: string]: Collection };

export type Item = Model & {
  imageURL: ImageURL;
  name: Name;
  price: number;
};

export interface Job {
  title: string;
  description: string;
}

export type Section = Model & {
  imageURL: ImageURL;
  linkURL?: string;
  size?: SectionSize;
  title: Title;
};

export type User = Model & {
  displayName: string;
  email: string;
};

export interface Payment {
  amount: number;
  token: Token;
}

export interface PaymentResponse {
  data: charges.ICharge;
}
