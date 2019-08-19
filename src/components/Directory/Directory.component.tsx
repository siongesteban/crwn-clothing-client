import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState, Section } from 'types';
import { MenuItem } from 'components';
import { selectDirectorySections } from 'selectors';

import './directory.style.scss';

interface DirectoryProps {
  sections: Section[];
}

const C: React.FC<DirectoryProps> = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, DirectoryProps>({
  sections: selectDirectorySections,
});

const CConnected = connect(mapStateToProps)(C);

export const Directory = CConnected;
