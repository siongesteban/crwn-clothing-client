import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderOptionProps {
  path: string;
  text: string;
}

export const HeaderOption: React.FC<HeaderOptionProps> = ({ path, text }) => (
  <Link key={path} className="option" to={path}>
    {text}
  </Link>
);
