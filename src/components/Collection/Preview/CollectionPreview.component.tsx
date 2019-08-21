import React from 'react';

import { Collection, Item } from 'types';
import { CollectionItem } from 'components';

import { S } from './CollectionPreview.style';

type Props = Omit<Collection, 'id'>;

export const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <S.Wrapper>
    <S.Title>{title.toUpperCase()}</S.Title>
    <S.Preview>
      {items.slice(0, 4).map((item: Item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </S.Preview>
  </S.Wrapper>
);
