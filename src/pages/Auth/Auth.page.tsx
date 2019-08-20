import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Signin, Signup } from 'components';
import { RootState } from 'types';
import { selectAuthStatus } from 'selectors';

import { S } from './Auth.style';

interface AuthProps {
  isAuthenticated: boolean;
}

const _Auth: React.FC<AuthProps> = ({ isAuthenticated }) => (
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

const mapStateToProps = createStructuredSelector<RootState, AuthProps>({
  isAuthenticated: selectAuthStatus,
});

export const Auth = connect(mapStateToProps)(_Auth);
