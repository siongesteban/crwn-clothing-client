import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../Header';
import { Home } from '../../pages/Home';
import { Shop } from '../../pages/Shop';
import { Auth } from '../../pages/Auth';

import { auth } from '../../firebase';
import { FirebaseUser, User } from '../../types';

import './app.style.scss';

interface AppProps {}

interface AppState {
  user?: User;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(
    props: AppProps,
    private unsubscribeFromAuth: firebase.Unsubscribe,
  ) {
    super(props);

    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user: FirebaseUser) => {
      let loggedInUser: User | undefined;

      if (user) {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        loggedInUser = {
          ...(uid && { id: uid }),
          ...(displayName && { firstName: displayName, lastName: '' }),
          ...(email && { email }),
          ...(phoneNumber && { phoneNumber }),
          ...(photoURL && { photoURL }),
        } as User;
      }

      this.setState({
        user: loggedInUser,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
