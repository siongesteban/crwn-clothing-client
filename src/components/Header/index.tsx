import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from 'types';
import { CartDropdown, CartIcon } from 'components/Cart';
import { Option } from './Option';
import { FirebaseAuth } from 'services/auth';
import { selectCartToggleStatus, selectAuthStatus } from 'selectors';

import { ReactComponent as Logo } from 'assets/crwn_clothing_logo.svg';
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
  cartIsHidden: boolean;
  isAuthenticated: boolean;
}

const _Header: React.FC<HeaderProps> = ({ cartIsHidden, isAuthenticated }) => {
  const handleSignOut = async () => {
    await FirebaseAuth.getInstance().signOut();
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
        <CartIcon />
      </div>
      {!cartIsHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, HeaderProps>({
  cartIsHidden: selectCartToggleStatus,
  isAuthenticated: selectAuthStatus,
});

export const Header = connect(mapStateToProps)(_Header);
