import React from 'react';
import { connect } from 'react-redux';

import { Item } from 'types';
import { Button } from 'components';
import { createBGImageStyle } from 'utils';
import { addItemToCart } from 'actions';

import './collection-item.style.scss';

interface CollectionItemProps {
  addItemToCart: typeof addItemToCart;
  item: Item;
}

export const _CollectionItem: React.FC<CollectionItemProps> = ({
  addItemToCart,
  item,
}) => {
  const handleAddToCartClick = () => {
    addItemToCart(item);
  };

  const { name, imageURL, price } = item;
  const bgImageStyle = createBGImageStyle(imageURL);

  return (
    <div className="collection-item">
      <div className="image" style={bgImageStyle} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted={true} onClick={handleAddToCartClick}>
        Add to Cart
      </Button>
    </div>
  );
};

const dispatchProps = { addItemToCart };

export const CollectionItem = connect(
  undefined,
  dispatchProps,
)(_CollectionItem);
