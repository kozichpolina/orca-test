import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";
    margin: 0; 
    font-weight: normal;
    line-height: 1.2;
    color: black;
    text-align: left; 
    background-color: #fff; 
    font-size: 14px;

    @media (min-width: 600px) {
      font-size: 16px;
    }
  }
`