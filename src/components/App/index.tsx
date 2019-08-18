import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../Header';
import { Home } from '../../pages/Home';
import { Shop } from '../../pages/Shop';
import { Auth } from '../../pages/Auth';

import { FirebaseAuth, UserService } from '../../services';
import { RootState, SampleState } from '../../types';
import { updateSampleName, setUser } from '../../actions';

import './app.style.scss';

interface AppProps {
  sample: SampleState;
  updateSampleName: typeof updateSampleName;
  setUser: typeof setUser;
}

class _App extends React.Component<AppProps> {
  auth = FirebaseAuth.getInstance();
  userService = UserService.getInstance();

  async componentDidMount() {
    const { sample, updateSampleName, setUser } = this.props;

    console.log('sample state:', sample);

    updateSampleName('Jane');

    await this.auth.authenticate(authUser => {
      setUser(authUser);
    });
  }

  componentWillUnmount() {
    this.auth.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  sample: state.sample,
});

const dispatchProps = { updateSampleName, setUser };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
