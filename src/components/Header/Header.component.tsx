import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from 'types';
import { CartDropdown, CartIcon, HeaderOption } from 'components';
import { selectCartToggleStatus, selectAuthStatus } from 'selectors';
import { signOut } from 'actions';

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
];

interface Props {
  cartIsHidden: boolean;
  isAuthenticated: boolean;
  signOut: typeof signOut;
}

type DesiredSelection = Pick<Props, 'cartIsHidden' | 'isAuthenticated'>;

const _Header: React.FC<Props> = ({
  cartIsHidden,
  isAuthenticated,
  signOut,
}) => (
  <S.Wrapper>
    <S.Logo to="/">
      <Logo />
    </S.Logo>
    <S.Options>
      {items.map(({ path, text }: HeaderItem) => (
        <HeaderOption key={path} path={path} text={text} />
      ))}
      {isAuthenticated ? (
        <S.OptionDiv onClick={signOut}>Sign Out</S.OptionDiv>
      ) : (
        <HeaderOption path="/signin" text="Signin" />
      )}
      <CartIcon />
    </S.Options>
    {!cartIsHidden && <CartDropdown />}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  cartIsHidden: selectCartToggleStatus,
  isAuthenticated: selectAuthStatus,
});
const dispatchProps = { signOut };

export const Header = connect(
  mapStateToProps,
  dispatchProps,
)(_Header);
