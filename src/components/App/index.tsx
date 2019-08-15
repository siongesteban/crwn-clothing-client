import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage';
import { Shop } from '../../pages/Shop';

import './app.style.scss';

export const App: React.FC<{}> = () => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </div>
);
