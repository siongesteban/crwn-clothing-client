import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';

import { Section } from '../../types';

import './menu-item.style.scss';

type MenuItemProps = Omit<Section, 'id'> & RouteComponentProps;

class _MenuItem extends React.Component<MenuItemProps> {
  handleClick = () => {
    const { history, linkURL, match } = this.props;

    history.push(`${match.url}${linkURL}`);
  };

  render() {
    const { imageURL, size, title } = this.props;

    const backgroundImageStyle: React.CSSProperties = {
      backgroundImage: `url(${imageURL})`,
    };

    return (
      <div className={classNames('menu-item', size)} onClick={this.handleClick}>
        <div className="background-image" style={backgroundImageStyle} />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export const MenuItem = withRouter(_MenuItem);
