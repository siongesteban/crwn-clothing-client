import React from 'react';

import { ObjectSet } from 'types';
import { Button, Input } from 'components';
import { FirebaseAuth } from 'services/auth';

import './signin.style.scss';

interface SigninProps {}

interface SigninState {
  email: string;
  password: string;
}

type StateSet = ObjectSet<SigninState>;

export class Signin extends React.Component<SigninProps, SigninState> {
  auth = FirebaseAuth.getInstance();

  constructor(props: SigninProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignInWithGoogleClick = async () => {
    await this.auth.signInWithGoogle();
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    this.setState({ [name]: value } as StateSet);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await this.auth.signIn(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="signin">
        <h2 className="title">I already have an account</h2>
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
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button
              googleSignin={true}
              onClick={this.handleSignInWithGoogleClick}
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
