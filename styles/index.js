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
.h-screen {
  height: 100vh;
}
.w-half {
  width: 50%;
}
.text-center {
  text-align: center;
}
.mr-2 {
  margin-right: 16px;
}
.mt-9 {
  margin-top: 72px;
}
.mb-5 {
  margin-bottom: 40px;
}
.mb-8 {
  margin-bottom: 64px;
}
.mb-4 {
  margin-bottom: 28px;
}
.mb-11 {
  margin-bottom: 88px;
}
.ml-4 {
  margin-left: 32px;
}
.ml-6xl {
  margin-left: 134px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

`;
