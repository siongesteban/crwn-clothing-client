import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Signin, Signup } from 'components/Auth';
import { RootState } from 'types';
import { selectAuthStatus } from 'selectors';

import './auth.style.scss';

interface AuthProps {
  isAuthenticated: boolean;
}

const _Auth: React.FC<AuthProps> = ({ isAuthenticated }) => (
  <>
    {isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <div className="auth-container">
        <Signin />
        <Signup />
      </div>
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
