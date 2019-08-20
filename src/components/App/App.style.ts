import { createGlobalStyle } from 'styled-components';

export const S = {
  GlobalStyle: createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    body {
      font-family: "Open Sans Condensed";
      margin: 0;
      padding: 20px 40px;
    }

    a {
      text-decoration: none;
      color: #000;
    }
  `,
};
