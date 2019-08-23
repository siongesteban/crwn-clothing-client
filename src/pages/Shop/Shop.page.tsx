import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CollectionOverviewProps, CollectionPageProps, RootState } from 'types';
import { CollectionPage } from 'pages';
import { CollectionOverview } from 'components';
import { selectIsCollectionFetching } from 'selectors';
import { fetchCollections } from 'actions';

type Props = RouteComponentProps & {
  loading: boolean;
  fetchCollections: typeof fetchCollections;
};

type DesiredSelection = Pick<Props, 'loading'>;

const C: React.FC<Props> = ({ loading, match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  const renderCollectionOverview = (props: CollectionOverviewProps) => (
    <CollectionOverview loading={loading} {...props} />
  );

  const renderCollectionPage = (props: CollectionPageProps) => (
    <CollectionPage loading={loading} {...props} />
  );

  return (
    <>
      <Route
        exact={true}
        path={`${match.path}`}
        component={renderCollectionOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={renderCollectionPage}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector<RootState, DesiredSelection>({
  loading: selectIsCollectionFetching,
});
const dispatchProps = { fetchCollections };

const CConnected = connect(
  mapStateToProps,
  dispatchProps,
)(C);

export const ShopPage = CConnected;
