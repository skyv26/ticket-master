import styles, { createGlobalStyle } from 'styled-components';

export const AppHeader = styles.header`

`;

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    width: 100%;
    min-height: 100%;
  }
`;

export default GlobalStyle;
