import React from 'react';
import { connect } from 'react-redux';

import { ObjectSet } from 'types';
import { Button, Input } from 'components';
import { signUp } from 'actions';

import { S } from '../Auth.style';

interface Props {
  signUp: typeof signUp;
}

interface State {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type StateSet = ObjectSet<State>;

class C extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value } as StateSet);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { signUp } = this.props;

    signUp(this.state);
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

const dispatchProps = { signUp };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const Signup = CConnected;
