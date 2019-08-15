import React from 'react';

import './button.style.scss';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export { Button };
