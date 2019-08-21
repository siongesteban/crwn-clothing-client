import React from 'react';

import { S } from './Button.style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignin?: boolean;
  inverted?: boolean;
}

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
);

Button.defaultProps = {
  type: 'button',
};

export { Button };
