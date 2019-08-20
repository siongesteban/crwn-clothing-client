import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface Button {
  inverted?: boolean;
  googleSignin?: boolean;
}

const styles = {
  base: css`
    background: #000;
    color: #fff;

    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
    }
  `,
  inverted: css`
    background: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
      background: #000;
      color: #fff;
    }
  `,
  googleSignin: css`
    background: #4285f4;
    color: #fff;

    &:hover {
      background: #357ae8;
      color: #fff;
    }
  `,
};

type Styles = typeof styles;

const getStyle = (
  { googleSignin, inverted }: Button,
  styles: Styles,
): FlattenSimpleInterpolation => {
  if (googleSignin) {
    return styles.googleSignin;
  } else if (inverted) {
    return styles.inverted;
  }

  return styles.base;
};

const S = {
  Wrapper: styled.button`
    border: none;
    cursor: pointer;
    font-family: "Open Sans Condensed";
    font-size: 15px;
    font-weight: bolder;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    min-width: 165px;
    padding: 0 35px 0 35px;
    text-transform: uppercase;
    width: auto;
    display: flex;
    justify-content: center;

    ${(props: Button) => getStyle(props, styles)}
  `,
};

export { S };
