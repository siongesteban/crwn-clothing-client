import React from 'react';
import { connect } from 'react-redux';

import {
  Collection as CollectionType,
  RootState,
  CollectionPageProps
} from 'types';
import { CollectionItem } from 'components';
import { withSpinner } from 'hocs';
import { selectShopCollection } from 'selectors';

import { S } from './Collection.style';

type Props = CollectionPageProps;

const C: React.FC<Props> = ({ collection }) => {
  if (!collection) {
    return <div>Loading</div>;
  }

  const { title, items } = collection;

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Items>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: RootState, props: Props) => ({
  collection: selectShopCollection(props.match.params.collectionId)(
    state,
  ) as CollectionType,
});

const CWithSpinner = withSpinner(C);
const CConnected = connect(mapStateToProps)(CWithSpinner);

export const CollectionPage = CConnected;
