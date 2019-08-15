import React from 'react';
import { Link } from 'react-router-dom';

import { Option } from './Option';

import { auth } from '../../firebase';

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

interface HeaderProps {
  isAuthenticated: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {items.map(({ path, text }: HeaderItem) => (
          <Option key={path} path={path} text={text} />
        ))}
        {isAuthenticated ? (
          <div className="option" onClick={handleSignOut}>
            Sign Out
          </div>
        ) : (
          <Option path="/signin" text="Signin" />
        )}
      </div>
    </div>
  );
};
