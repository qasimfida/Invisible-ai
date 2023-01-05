import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, h1, h2,h3,h4,h5,h6,p {
  margin: 0;
  font-family: 'Jura', sans-serif;
}
html{
  box-sizing: border-box;
  display:block;
  height: 100%;
  padding: 0;
}

body{
  min-height:100vh;
}
svg {
    display: flex;
}
.text-center {
  text-align: center;
}
.ml-6xl {
    margin-left: 134px;
}

`;
