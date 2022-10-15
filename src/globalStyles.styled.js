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

export const Image = styles.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: top;
`;

export const ImageOverlay = styles(Wrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContextHeading = styles.p`
  color: white;
  background-color: #744499;
  width: 100%;
  text-align: left;
  padding: 0.25rem 1rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  vertical-align: middle;
  font-family: 'Encode Sans', sans-serif;
  font-weight: 600;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;600;700&family=Inter:wght@300;400;600&family=Lato:wght@300;400;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&display=swap');
  
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
    background-color: rgba(116, 68, 153, 0.85);
  }
`;

export default GlobalStyle;
