import React from 'react';

import { Collection } from 'types';
import { CollectionPreview } from 'components';
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
