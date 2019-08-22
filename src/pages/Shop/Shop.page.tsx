import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import {
  Collections,
  CollectionOverviewProps,
  CollectionPageProps
} from 'types';
import { CollectionPage } from 'pages';
import { CollectionOverview } from 'components';
import { setShopCollections } from 'actions';
import { CollectionService } from 'services';

type Props = RouteComponentProps & {
  setShopCollections: typeof setShopCollections;
};

interface State {
  loading: boolean;
}

class C extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { setShopCollections } = this.props;
    const collections = await this.getCollections();

    setShopCollections(collections);
    this.setState({ loading: false });
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

  renderCollectionOverview = (props: CollectionOverviewProps) => {
    const { loading } = this.state;

    return <CollectionOverview loading={loading} {...props} />;
  };

  renderCollectionPage = (props: CollectionPageProps) => {
    const { loading } = this.state;

    return <CollectionPage loading={loading} {...props} />;
  };

  render() {
    const { match } = this.props;

    return (
      <>
        <Route
          exact={true}
          path={`${match.path}`}
          component={this.renderCollectionOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={this.renderCollectionPage}
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
