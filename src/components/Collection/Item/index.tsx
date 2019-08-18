import React from 'react';

import { Button } from '../../common';
import { Item } from '../../../types';
import { createBGImageStyle } from '../../../utils';

import './collection-item.style.scss';

export const CollectionItem: React.FC<Item> = ({ name, imageURL, price }) => {
  const bgImageStyle = createBGImageStyle(imageURL);

  return (
    <div className="collection-item">
      <div className="image" style={bgImageStyle} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted={true}>Add to Cart</Button>
    </div>
  );
};
