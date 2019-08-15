import React from 'react';
import classNames from 'classnames';

import './button.style.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignin?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, googleSignin, ...rest }) => {
  const googleSigninClassName = 'google-signin';
  const className = classNames('button', {
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
