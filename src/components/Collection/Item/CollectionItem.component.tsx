import React from 'react';
import { connect } from 'react-redux';

import { Item } from 'types';
import { addItemToCart } from 'actions';

import { S } from './CollectionItem.style';

interface CollectionItemProps {
  addItemToCart: typeof addItemToCart;
  item: Item;
}

const _CollectionItem: React.FC<CollectionItemProps> = ({
  addItemToCart,
  item,
}) => {
  const handleAddToCartClick = () => {
    addItemToCart(item);
  };

  const { name, imageURL, price } = item;

  return (
    <S.Wrapper>
      <S.BGImage imageURL={imageURL} />
      <S.Footer>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.Footer>
      <S.AddButton inverted={true} onClick={handleAddToCartClick}>
        Add to Cart
      </S.AddButton>
    </S.Wrapper>
  );
};

const dispatchProps = { addItemToCart };

export const CollectionItem = connect(
  undefined,
  dispatchProps,
)(_CollectionItem);
