import React from 'react';

import './button.style.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
);
