import { createSelector } from 'reselect';

import { RootState, Section } from 'types';

const selectDirectory = ({ directory }: RootState) => directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  ({ sections }) => sections as Section[],
);
