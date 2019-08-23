import React from 'react';
import { connect } from 'react-redux';

import { ObjectSet } from 'types';
import { Button, Input } from 'components';
import { FirebaseAuth } from 'services/auth';
import { signInWithEmail, signInWithGoogle } from 'actions';

import { S } from '../Auth.style';

interface Props {
  signInWithGoogle: typeof signInWithGoogle;
  signInWithEmail: typeof signInWithEmail;
}

interface State {
  email: string;
  password: string;
}

type StateSet = ObjectSet<State>;

class C extends React.Component<Props, State> {
  auth = FirebaseAuth.getInstance();

  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value } as StateSet);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.signInWithEmail(this.state);
  };

  render() {
    const { signInWithGoogle } = this.props;
    const { email, password } = this.state;

    return (
      <S.Wrapper>
        <S.Title>I already have an account</S.Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
          <S.Buttons>
            <Button type="submit">Sign In</Button>
            <Button googleSignin={true} onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </S.Buttons>
        </form>
      </S.Wrapper>
    );
  }
}

const dispatchProps = { signInWithEmail, signInWithGoogle };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const Signin = CConnected;
