import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Section } from 'types';

import { S } from './MenuItem.style';

type Props = RouteComponentProps & {
  section: Section;
};

const C: React.FC<Props> = ({
  history,
  match,
  section: { imageURL, linkURL, size, title },
}) => {
  const handleClick = () => {
    history.push(`${match.url}shop/${linkURL}`);
  };

  return (
    <S.Wrapper size={size} onClick={handleClick}>
      <S.BGImage imageURL={imageURL} />
      <S.Content>
        <S.Title>{title.toUpperCase()}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.Wrapper>
  );
};

const CWithRouter = withRouter(C);

export const MenuItem = CWithRouter;
