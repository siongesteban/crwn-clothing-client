import React from 'react';
import classNames from 'classnames';

import './button.style.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignin?: boolean;
  inverted?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  googleSignin,
  inverted,
  ...rest
}) => {
  const googleSigninClassName = 'google-signin';

  const className = classNames('button', {
    inverted,
    [googleSigninClassName]: googleSignin,
  });

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export { Button };
