import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from 'components';
import { AuthPage, CheckoutPage, HomePage, ShopPage } from 'pages';
import { authenticateUser, updateSampleName } from 'actions';

import { S } from './App.style';

interface Props {
  authenticateUser: typeof authenticateUser;
}

const C: React.FC<Props> = ({ authenticateUser }) => {
  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

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
};

const dispatchProps = { authenticateUser, updateSampleName };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const App = CConnected;
