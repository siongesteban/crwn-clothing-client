import React from 'react';

import { ObjectSet } from 'types';
import { Button, Input } from 'components';
import { FirebaseAuth } from 'services/auth';

import { S } from '../Auth.style';

interface SignpuProps {}

interface SignupState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type StateSet = ObjectSet<SignupState>;

export class Signup extends React.Component<SignpuProps, SignupState> {
  initialState: SignupState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  auth = FirebaseAuth.getInstance();

  constructor(props: SignpuProps) {
    super(props);

    this.state = this.initialState;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value } as StateSet);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }

    await this.auth.signUp(this.state);

    this.setState(this.initialState);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <S.Wrapper>
        <S.Title>I do not have an account</S.Title>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            handleChange={this.handleChange}
            label="Display Name"
            name="displayName"
            required={true}
            value={displayName}
          />
          <Input
            handleChange={this.handleChange}
            label="Email"
            name="email"
            required={true}
            type="email"
            value={email}
          />
          <Input
            handleChange={this.handleChange}
            label="Password"
            name="password"
            required={true}
            type="password"
            value={password}
          />
          <Input
            handleChange={this.handleChange}
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
  }
}
