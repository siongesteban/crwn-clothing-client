import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState, Section } from 'types';
import { MenuItem } from 'components';
import { selectDirectorySections } from 'selectors';

import { S } from './Directory.style';

interface DirectoryProps {
  sections: Section[];
}

const C: React.FC<DirectoryProps> = ({ sections }) => (
  <S.Wrapper>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, DirectoryProps>({
  sections: selectDirectorySections,
});

const CConnected = connect(mapStateToProps)(C);

export const Directory = CConnected;
