import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { Collection as CollectionType, RootState } from 'types';
import { CollectionItem } from 'components';
import { selectShopCollection } from 'selectors';

import './collection.style.scss';

type CollectionProps = RouteComponentProps<{
  collectionId: string;
}> & {
  collection: CollectionType;
};

const C: React.FC<CollectionProps> = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState, props: CollectionProps) => ({
  collection: selectShopCollection(props.match.params.collectionId)(
    state,
  ) as CollectionType,
});

const CConnected = connect(mapStateToProps)(C);

export const Collection = CConnected;
