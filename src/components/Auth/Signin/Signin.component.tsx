import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Input } from 'components';
import { signInWithEmail, signInWithGoogle } from 'actions';

import { S } from '../Auth.style';

interface Props {
  signInWithGoogle: typeof signInWithGoogle;
  signInWithEmail: typeof signInWithEmail;
}

const C: React.FC<Props> = ({ signInWithEmail, signInWithGoogle }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmail(credentials);
  };

  const { email, password } = credentials;

  return (
    <S.Wrapper>
      <S.Title>I already have an account</S.Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <S.Buttons>
          <Button type="submit">Sign In</Button>
          <Button googleSignin={true} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </S.Buttons>
      </form>
    </S.Wrapper>
  );
};

const dispatchProps = { signInWithEmail, signInWithGoogle };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const Signin = CConnected;
