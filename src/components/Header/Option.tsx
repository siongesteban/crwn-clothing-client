import React from 'react';
import { Link } from 'react-router-dom';

interface OptionProps {
  path: string;
  text: string;
}

export const Option: React.FC<OptionProps> = ({ path, text }) => (
  <Link key={path} className="option" to={path}>
    {text}
  </Link>
);
