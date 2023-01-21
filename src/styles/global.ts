import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`