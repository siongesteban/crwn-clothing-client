import React from 'react';

import { Section } from '../../types';
import { MenuItem } from '../MenuItem';

import './directory.style.scss';

enum SectionSize {
  LARGE = 'large',
}

interface DirectoryProps {}

interface DirectoryState {
  sections: Section[];
}

export class Directory extends React.Component<DirectoryProps, DirectoryState> {
  constructor(props: DirectoryProps) {
    super(props);

    this.state = {
      sections: [
        {
          id: 1,
          imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
          title: 'hats',
        },
        {
          id: 2,
          imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
          title: 'jackets',
        },
        {
          id: 3,
          imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          title: 'sneakers',
        },
        {
          id: 4,
          imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
          title: 'womens',
          size: SectionSize.LARGE,
        },
        {
          id: 5,
          imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
          title: 'mens',
          size: SectionSize.LARGE,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageURL, size, title }) => (
          <MenuItem key={id} imageURL={imageURL} size={size} title={title} />
        ))}
      </div>
    );
  }
}
