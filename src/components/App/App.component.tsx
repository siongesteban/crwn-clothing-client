import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootState, SampleState } from 'types';
import { Header } from 'components';
import { AuthPage, CheckoutPage, HomePage, ShopPage } from 'pages';
import { authenticateUser, updateSampleName } from 'actions';

import { S } from './App.style';

interface Props {
  sample: SampleState;
  authenticateUser: typeof authenticateUser;
  updateSampleName: typeof updateSampleName;
}

class _App extends React.Component<Props> {
  async componentDidMount() {
    const { sample, authenticateUser, updateSampleName } = this.props;

    console.log('sample state:', sample);

    updateSampleName('Jane');
    authenticateUser();
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

const dispatchProps = { authenticateUser, updateSampleName };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
