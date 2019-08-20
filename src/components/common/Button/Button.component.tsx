import React from 'react';

import { S } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignin?: boolean;
  inverted?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
);

Button.defaultProps = {
  type: 'button',
};

export { Button };
