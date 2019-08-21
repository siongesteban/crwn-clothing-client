import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import { Collections } from 'types';
import { CollectionPage } from 'pages';
import { CollectionOverview } from 'components';
import { setShopCollections } from 'actions';
import { CollectionService } from 'services';

type Props = RouteComponentProps & {
  setShopCollections: typeof setShopCollections;
};

class C extends React.Component<Props> {
  async componentDidMount() {
    const { setShopCollections } = this.props;
    const collections = await this.getCollections();

    setShopCollections(collections);
  }

  async getCollections(): Promise<Collections> {
    const collections = await CollectionService.getInstance().find({
      subItemKeys: ['items'],
    });

    return collections.reduce((accumulator, collection) => {
      (accumulator as Collections)[
        collection.title.toLocaleLowerCase()
      ] = collection;

      return accumulator;
    }, {});
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <Route
          exact={true}
          path={`${match.path}`}
          component={CollectionOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </>
    );
  }
}

const dispatchProps = { setShopCollections };

const CConnected = connect(
  undefined,
  dispatchProps,
)(C);

export const ShopPage = CConnected;
