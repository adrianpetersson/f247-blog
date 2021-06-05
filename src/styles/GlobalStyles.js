import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-stretch: normal;
    font-family: 'Rational', sans-serif;
    color:#002a4e;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
  }

  ul,
  menu,
  dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  a,
  button {
   transition: opacity .3s;
  }

  a:hover,
  a:active,
  button:hover,
  button:active {
    opacity: .9;
  }

  img {
    max-width: 100%;
  }

  img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
`;

export default GlobalStyles;
