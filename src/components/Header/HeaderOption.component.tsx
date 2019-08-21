import React from 'react';

import { S } from './Header.style';

interface Props {
  path: string;
  text: string;
}

export const HeaderOption: React.FC<Props> = ({ path, text }) => (
  <S.OptionLink key={path} to={path}>
    {text}
  </S.OptionLink>
);
