import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../Header';
import { Home } from '../../pages/Home';
import { Shop } from '../../pages/Shop';
import { Auth } from '../../pages/Auth';

import { FirebaseAuth } from '../../services/auth';
import { User } from '../../types';

import './app.style.scss';

interface AppProps {}

interface AppState {
  user?: User;
}

export class App extends React.Component<AppProps, AppState> {
  auth = FirebaseAuth.getInstance();

  constructor(props: AppProps) {
    super(props);

    this.state = {
      user: undefined,
    };
  }

  async componentDidMount() {
    await this.auth.authenticate(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.auth.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header isAuthenticated={!!this.state.user} />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}
