import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Section } from 'types';

import { S } from './MenuItem.style';

type Props = Omit<Section, 'id'> & RouteComponentProps;

class _MenuItem extends React.Component<Props> {
  handleClick = () => {
    const { history, linkURL, match } = this.props;
    history.push(`${match.url}shop/${linkURL}`);
  };

  render() {
    const { imageURL, size, title } = this.props;

    return (
      <S.Wrapper size={size} onClick={this.handleClick}>
        <S.BGImage imageURL={imageURL} />
        <S.Content>
          <S.Title>{title.toUpperCase()}</S.Title>
          <S.Subtitle>SHOP NOW</S.Subtitle>
        </S.Content>
      </S.Wrapper>
    );
  }
}

export const MenuItem = withRouter(_MenuItem);
