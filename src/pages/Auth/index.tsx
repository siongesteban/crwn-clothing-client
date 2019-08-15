import React from 'react';

import { Signin } from '../../components/Auth';

import './auth.style.scss';

export const Auth: React.FC = () => (
  <div className="auth-container">
    <Signin />
  </div>
);
