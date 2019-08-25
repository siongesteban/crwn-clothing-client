import { CartActionType, CartAction } from './cart-action.type';
import { StripeActionType, StripeAction } from './stripe-action.type';
import { SampleActionType, SampleAction } from './sample-action.type';
import { ShopActionType, ShopAction } from './shop-action.type';
import { UserActionType, UserAction } from './user-action.type';

export const ActionType = {
  ...CartActionType,
  ...StripeActionType,
  ...SampleActionType,
  ...ShopActionType,
  ...UserActionType,
};

export type Action =
  | CartAction
  | StripeAction
  | SampleAction
  | ShopAction
  | UserAction;

export * from './cart-action.type';
export * from './stripe-action.type';
export * from './sample-action.type';
export * from './shop-action.type';
export * from './user-action.type';
