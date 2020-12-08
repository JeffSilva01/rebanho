import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h3 {
    color: #581518;
  }

  html {
    font-size: 62.5%
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    overflow-x: hidden;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font: 400 16px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  :root {
    --primary: #f6a31c;
    --secondary: #581518;

    --black: #000;
    --white: #fff;
  }

`
