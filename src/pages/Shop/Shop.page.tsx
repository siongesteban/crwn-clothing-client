import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  CollectionOverviewProps,
  CollectionPageProps,
  RootState,
  Action
} from 'types';
import { CollectionPage } from 'pages';
import { CollectionOverview } from 'components';
import { selectIsCollectionFetching } from 'selectors';
import { fetchCollections } from 'actions';

type Props = RouteComponentProps & {
  loading: boolean;
  fetchCollections: typeof fetchCollections;
};

type DesiredSelection = Pick<Props, 'loading'>;

class C extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchCollections();
  }

  renderCollectionOverview = (props: CollectionOverviewProps) => {
    const { loading } = this.props;

    return <CollectionOverview loading={loading} {...props} />;
  };

  renderCollectionPage = (props: CollectionPageProps) => {
    const { loading } = this.props;

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

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  loading: selectIsCollectionFetching,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ fetchCollections }, dispatch);

const CConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(C);

export const ShopPage = CConnected;
