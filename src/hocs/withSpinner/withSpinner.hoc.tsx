import React from 'react';

import { SpinnerOverlay } from 'components';

interface Props {
  loading: boolean;
}

export const withSpinner = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & Props> => ({ loading, ...props }) =>
  loading ? <SpinnerOverlay /> : <Component {...(props as P)} />;
