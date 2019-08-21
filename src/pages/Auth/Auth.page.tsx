import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Signin, Signup } from 'components';
import { RootState } from 'types';
import { selectAuthStatus } from 'selectors';

import { S } from './Auth.style';

interface Props {
  isAuthenticated: boolean;
}

const _Auth: React.FC<Props> = ({ isAuthenticated }) => (
  <>
    {isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <S.Wrapper>
        <Signin />
        <Signup />
      </S.Wrapper>
    )}
  </>
);

_Auth.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = createStructuredSelector<RootState, Props>({
  isAuthenticated: selectAuthStatus,
});

export const AuthPage = connect(mapStateToProps)(_Auth);
