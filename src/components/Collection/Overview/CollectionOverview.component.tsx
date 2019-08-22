import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Collection, CollectionOverviewProps, RootState } from 'types';
import { CollectionPreview } from 'components';
import { withSpinner } from 'hocs';
import { selectShopCollectionsForPreview } from 'selectors';

import { S } from './CollectionOverview.style';

type Props = CollectionOverviewProps;

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

const CWithSpinner = withSpinner<Props>(C);
const CConnected = connect(mapStateToProps)(CWithSpinner);

export const CollectionOverview = CConnected;
