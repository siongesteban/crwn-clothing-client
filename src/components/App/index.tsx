import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';

import './app.style.scss';

const HatsPage: React.FC = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

// export const App: React.FC<{}> = () => <HomePage />;
export const App: React.FC<{}> = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  </div>
);
