import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootState, SampleState } from 'types';
import { Header } from 'components';
import { AuthPage, CheckoutPage, HomePage, ShopPage } from 'pages';
import { updateSampleName } from 'actions';

import { S } from './App.style';

interface Props {
  sample: SampleState;
  updateSampleName: typeof updateSampleName;
}

class _App extends React.Component<Props> {
  async componentDidMount() {
    const { sample, updateSampleName } = this.props;

    console.log('sample state:', sample);

    updateSampleName('Jane');
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

const dispatchProps = { updateSampleName };

export const App = connect(
  mapStateToProps,
  dispatchProps,
)(_App);
