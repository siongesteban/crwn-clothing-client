import { CSSProperties } from 'react';

export const createBGImageStyle = (imageURL: string): CSSProperties => ({
  backgroundImage: `url(${imageURL})`,
});
