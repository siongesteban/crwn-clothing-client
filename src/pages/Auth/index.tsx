import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Signin, Signup } from '../../components/Auth';

import './auth.style.scss';
import { RootState } from '../../types';

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

const mapStateToProps = ({ user }: RootState) => ({ isAuthenticated: !!user });

export const Auth = connect(mapStateToProps)(_Auth);
