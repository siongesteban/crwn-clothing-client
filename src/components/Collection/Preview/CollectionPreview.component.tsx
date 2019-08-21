import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Collection, Item } from 'types';
import { CollectionItem } from 'components';

import { S } from './CollectionPreview.style';

type Props = Omit<Collection, 'id'> & RouteComponentProps;

const C: React.FC<Props> = ({ history, match, title, items }) => {
  const handleTitleClick = () => {
    history.push(`${match.path}/${title.toLocaleLowerCase()}`);
  };

  return (
    <S.Wrapper>
      <S.Title onClick={handleTitleClick}>{title.toUpperCase()}</S.Title>
      <S.Preview>
        {items.slice(0, 4).map((item: Item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Preview>
    </S.Wrapper>
  );
};

const CWithRouter = withRouter(C);

export const CollectionPreview = CWithRouter;
