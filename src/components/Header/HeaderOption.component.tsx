import React from 'react';

import { S } from './Header.style';

interface HeaderOptionProps {
  path: string;
  text: string;
}

export const HeaderOption: React.FC<HeaderOptionProps> = ({ path, text }) => (
  <S.OptionLink key={path} to={path}>
    {text}
  </S.OptionLink>
);
