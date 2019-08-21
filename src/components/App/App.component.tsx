import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootState, SampleState } from 'types';
import { Header } from 'components';
import { AuthPage, CheckoutPage, HomePage, ShopPage } from 'pages';
import { FirebaseAuth, UserService } from 'services';
import { updateSampleName, setUser } from 'actions';

import { S } from './App.style';

interface Props {
  sample: SampleState;
  setUser: typeof setUser;
  updateSampleName: typeof updateSampleName;
}

class _App extends React.Component<Props> {
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
      <>
        <S.GlobalStyle />
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact={true} path="/signin" component={AuthPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ sample }: RootState) => ({ sample });

const dispatchProps = { updateSampleName, setUser };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
