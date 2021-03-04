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
    box-sizing: border-box; // 1
  }

  body {
    font-family: ${vars.fontFamily.base};
    margin: 0;
    font-weight: normal;
    line-height: 1.2;
    color: ${vars.colors.brandBlack};
    font-size: ${vars.fontSize.baseMobile};
    text-align: left;
    background-color: ${vars.colors.white};

    @media (min-width: ${vars.breakpoints.tablet}) {
      font-size: ${vars.fontSize.base};
    }
    
    button {
      padding: 0;
      font-family: inherit;
      font-size: 100%;
      border: none;
      
      &:focus {
        outline: none;
      }
    }
  }
`