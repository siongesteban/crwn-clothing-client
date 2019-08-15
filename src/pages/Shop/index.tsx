import React from 'react';

import { CollectionPreview } from '../../components/Collection/Preview';

import { Collection } from '../../types';
import { collections } from './collections.data';

interface ShopPageProps {}

interface ShopPageState {
  collections: Collection[];
}

export class Shop extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

    this.state = {
      collections,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map((collection: Collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}
