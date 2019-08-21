import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Collection, RootState } from 'types';
import { CollectionPreview } from 'components';
import { selectShopCollectionsForPreview } from 'selectors';

import { S } from './CollectionOverview.style';

interface Props {
  collections: Collection[];
}

const C: React.FC<Props> = ({ collections }) => (
  <S.Wrapper>
    {collections.map((collection: Collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, Props>({
  collections: selectShopCollectionsForPreview,
});

const CConnected = connect(mapStateToProps)(C);

export const CollectionOverview = CConnected;
