import React from 'react';

import { Button, Input } from '../../common';

import { ObjectSet } from '../../../types';
import { signInWithGoogle } from '../../../firebase';

import './signin.style.scss';

interface SigninProps {}

interface SigninState {
  email: string;
  password: string;
}

type StateSet = ObjectSet<SigninState>;

export class Signin extends React.Component<SigninProps, SigninState> {
  constructor(props: SigninProps) {
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

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="signin">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
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
            <Button googleSignin={true} onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
