import styles, { createGlobalStyle } from 'styled-components';

export const Wrapper = styles.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styles.a`
  font-size: 1.75rem;
  color: white;
`;

export const UnorderedList = styles.ul`
`;

export const List = styles.li`
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
    background-color: #744499c2;
  }
`;

export default GlobalStyle;
