import React from 'react';

import { S } from './withSpinner.style';

interface Props {
  loading: boolean;
}

export const withSpinner = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & Props> => ({ loading, ...props }) =>
  loading ? (
    <S.Overlay>
      <S.Container />
    </S.Overlay>
  ) : (
    <Component {...props as P} />
  );
