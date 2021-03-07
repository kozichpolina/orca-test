import { createGlobalStyle } from 'styled-components'

import Mulish from '../assets/fonts/Mulish/mulish-regular.woff2'

import * as vars from './variables.js';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mulish';
    src: url(${Mulish}) format('woff2');
    font-weight: 400;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box; 
  }
  
  html {
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%; 
    -ms-overflow-style: scrollbar; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;

    font-size: ${vars.fontSize.baseMobile};

    @media (min-width: ${vars.breakpoints.tablet}) {
      font-size: ${vars.fontSize.base};
    }
  }

  body {
    font-family: ${vars.fontFamily.base};
    margin: 0;
    font-weight: normal;
    line-height: 1.2;
    color: ${vars.colors.brandBlack};
    font-size: ${vars.fontSize.bodyM};
    text-align: left;
    background-color: ${vars.colors.white};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
    padding: 0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.2;
    border: none;
    
    &:focus {
      outline: none;
    }
  }
`