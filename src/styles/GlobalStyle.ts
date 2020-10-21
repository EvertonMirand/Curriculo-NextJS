import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;

  }

  html {
    --primary-color: #0d47a1;
    --secondary-color: #42a5f5;
    --background: #fff;
    --primary-text: #fff;
    --secondary-text: #000;
  }

  #root {
    min-height: 100vh;


    @media (max-width: 400px) {
      font-size: 10px;
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  span {
    overflow: hidden;
    text-overflow: clip;
    overflow-wrap: break-word;
  }
`;
