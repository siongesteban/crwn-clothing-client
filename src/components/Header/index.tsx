import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crwn_clothing_logo.svg';
import './header.style.scss';

interface HeaderItem {
  path: string;
  text: string;
}

const items: HeaderItem[] = [
  {
    path: '/shop',
    text: 'Shop',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
];

export const Header: React.FC = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {items.map(({ path, text }: HeaderItem) => (
        <Link key={path} className="option" to={path}>
          {text}
        </Link>
      ))}
    </div>
  </div>
);
