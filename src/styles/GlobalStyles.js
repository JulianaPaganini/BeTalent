import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue';
    background:#fff;

  }

  h1 {
    font-family: 'Helvetica', sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  h2 {
    font-family: 'Helvetica', sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  h3 {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;

export default GlobalStyles;
