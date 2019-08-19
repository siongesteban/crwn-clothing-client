import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { Collection } from 'pages';
import { CollectionOverview } from 'components';

export const Shop: React.FC<RouteComponentProps> = ({ match }) => (
  <div className="shop-page">
    <Route exact={true} path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);
