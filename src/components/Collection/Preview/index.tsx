import React from 'react';

import { CollectionItem } from '../Item';

import { Collection, Item } from '../../../types';

import './collection-preview.style.scss';

type CollectionPreviewProps = Omit<Collection, 'id'>;

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.slice(0, 4).map((item: Item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
