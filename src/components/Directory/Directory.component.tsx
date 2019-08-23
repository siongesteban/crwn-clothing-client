import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState, Section } from 'types';
import { MenuItem } from 'components';
import { selectDirectorySections } from 'selectors';

import { S } from './Directory.style';

interface Props {
  sections: Section[];
}

const C: React.FC<Props> = ({ sections }) => (
  <S.Wrapper>
    {sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ))}
  </S.Wrapper>
);

const mapStateToProps = createStructuredSelector<RootState, Props>({
  sections: selectDirectorySections,
});

const CConnected = connect(mapStateToProps)(C);

export const Directory = CConnected;
