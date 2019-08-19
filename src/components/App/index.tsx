import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootState, SampleState } from 'types';
import { Header } from 'components/Header';
import { Auth, Checkout, Home, Shop } from 'pages';
import { FirebaseAuth, UserService } from 'services';
import { updateSampleName, setUser } from 'actions';

import './app.style.scss';

interface AppProps {
  sample: SampleState;
  setUser: typeof setUser;
  updateSampleName: typeof updateSampleName;
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
          <Route path="/checkout" component={Checkout} />
          <Route exact={true} path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ sample }: RootState) => ({ sample });

const dispatchProps = { updateSampleName, setUser };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
