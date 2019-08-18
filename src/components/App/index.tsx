import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../Header';
import { Home } from '../../pages/Home';
import { Shop } from '../../pages/Shop';
import { Auth } from '../../pages/Auth';

import { FirebaseAuth, UserService } from '../../services';
import { User, RootState, SampleState } from '../../types';
import { updateSampleName } from '../../actions';

import './app.style.scss';

interface AppProps {
  sample: SampleState;
  updateSampleName: typeof updateSampleName;
}

interface AppState {
  user?: User;
}

class _App extends React.Component<AppProps, AppState> {
  auth = FirebaseAuth.getInstance();
  userService = UserService.getInstance();

  constructor(props: AppProps) {
    super(props);

    this.state = {
      user: undefined,
    };
  }

  async componentDidMount() {
    const { sample, updateSampleName } = this.props;

    console.log('sample state:', sample);

    updateSampleName('Jane');

    await this.auth.authenticate(authUser => {
      this.setState({ user: authUser });
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

const mapStateToProps = (state: RootState) => ({
  sample: state.sample,
});
const dispatchProps = { updateSampleName };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
