import { DirectoryState, SectionSize } from '../types';

const INITIAL_STATE: DirectoryState = {
  sections: [
    {
      id: 1,
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
      title: 'hats',
      linkURL: 'hats',
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

export const directoryReducer = (
  state: DirectoryState = INITIAL_STATE,
): DirectoryState => state;
