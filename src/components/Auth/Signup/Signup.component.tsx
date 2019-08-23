import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Input } from 'components';
import { signUp } from 'actions';

import { S } from '../Auth.style';

interface Props {
  signUp: typeof signUp;
}

const C: React.FC<Props> = ({ signUp }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signUp(credentials);
  };

  const { displayName, email, password, confirmPassword } = credentials;

  return (
    <S.Wrapper>
      <S.Title>I do not have an account</S.Title>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          label="Display Name"
          name="displayName"
          required={true}
          value={displayName}
        />
        <Input
          handleChange={handleChange}
          label="Email"
          name="email"
          required={true}
          type="email"
          value={email}
        />
        <Input
          handleChange={handleChange}
          label="Password"
          name="password"
          required={true}
          type="password"
          value={password}
        />
        <Input
          handleChange={handleChange}
          label="Confirm Password"
          name="confirmPassword"
          required={true}
          type="password"
          value={confirmPassword}
        />
        <S.Buttons>
          <Button type="submit">Sign Up</Button>
        </S.Buttons>
      </form>
    </S.Wrapper>
  );
};

const dispatchProps = { signUp };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const Signup = CConnected;
