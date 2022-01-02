import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, select, textarea, button {
    font: 400 1rem 'Roboto',sans-serif;
  }

  body {
    background-color: #AEAFB2;
    color: #FFFFFF;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 1080px) {
    html { 
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 87.5%;
  }
`
