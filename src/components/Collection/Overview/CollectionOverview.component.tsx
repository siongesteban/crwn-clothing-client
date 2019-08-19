import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Collection, RootState } from 'types';
import { CollectionPreview } from 'components';
import { selectShopCollections } from 'selectors';

import './collection-overview.style.scss';

interface CollectionOverviewProps {
  collections: Collection[];
}

const C: React.FC<CollectionOverviewProps> = ({ collections }) => (
  <div className="collection-overview">
    {collections.map((collection: Collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  CollectionOverviewProps
>({
  collections: selectShopCollections,
});

const CConnected = connect(mapStateToProps)(C);

export const CollectionOverview = CConnected;
