import { createSelector } from 'reselect';

import { RootState } from 'types';

const selectUser = ({ user }: RootState) => user;

export const selectAuthStatus = createSelector(
  [selectUser],
  ({ data }) => !!data,
);
