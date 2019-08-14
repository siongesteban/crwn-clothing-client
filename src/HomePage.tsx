import React from 'react';

import './homepage.styles.scss';

const items = ['Hats', 'Jackets', 'Sneakers', 'Womens', 'Mens'];

const Item: React.FC<{ title: string }> = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export const HomePage: React.FC = () => (
  <div className="homepage">
    <div className="directory-menu">
      {items.map(item => (
        <Item title={item} />
      ))}
    </div>
  </div>
);
