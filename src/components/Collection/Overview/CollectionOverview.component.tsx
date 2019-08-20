import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Collection, RootState } from 'types';
import { CollectionPreview } from 'components';
import { selectShopCollectionsForPreview } from 'selectors';

import { S } from './CollectionOverview.style';

interface CollectionOverviewProps {
  collections: Collection[];
}

const C: React.FC<CollectionOverviewProps> = ({ collections }) => (
  <S.Wrapper>
    {collections.map((collection: Collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  CollectionOverviewProps
>({
  collections: selectShopCollectionsForPreview,
});

const CConnected = connect(mapStateToProps)(C);

export const CollectionOverview = CConnected;
