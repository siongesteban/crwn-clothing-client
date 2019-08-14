import React from 'react';
import classNames from 'classnames';

import { Section } from '../../types';

import './menu-item.style.scss';

type MenuItemProps = Omit<Section, 'id'>;

export const MenuItem: React.FC<MenuItemProps> = ({
  imageURL,
  size,
  title,
}) => {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${imageURL})`,
  };

  return (
    <div className={classNames('menu-item', size)}>
      <div className="background-image" style={backgroundImageStyle} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
