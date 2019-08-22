import { RouteComponentProps } from 'react-router-dom';

import { Collection } from 'types';

export interface CollectionOverviewProps {
  collections: Collection[];
}

export type CollectionPageProps = RouteComponentProps<{
  collectionId: string;
}> & {
  collection?: Collection;
};
