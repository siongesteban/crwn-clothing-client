import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from 'types';
import { CartDropdown, CartIcon, HeaderOption } from 'components';
import { FirebaseAuth } from 'services/auth';
import { selectCartToggleStatus, selectAuthStatus } from 'selectors';

import { ReactComponent as Logo } from 'assets/crwn_clothing_logo.svg';
import { S } from './Header.style';

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
    <S.Header>
      <S.Logo to="/">
        <Logo />
      </S.Logo>
      <S.Options>
        {items.map(({ path, text }: HeaderItem) => (
          <HeaderOption key={path} path={path} text={text} />
        ))}
        {isAuthenticated ? (
          <S.OptionDiv onClick={handleSignOut}>Sign Out</S.OptionDiv>
        ) : (
          <HeaderOption path="/signin" text="Signin" />
        )}
        <CartIcon />
      </S.Options>
      {!cartIsHidden && <CartDropdown />}
    </S.Header>
  );
};

const mapStateToProps = createStructuredSelector<RootState, HeaderProps>({
  cartIsHidden: selectCartToggleStatus,
  isAuthenticated: selectAuthStatus,
});

export const Header = connect(mapStateToProps)(_Header);
