import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-size: 100%;

  text-decoration: none;
}

body {
  color: #fff;
  background: #ebf2f5;
}

body,
input,
button,
textarea {
  font: 600 18px Nunito, sans-serif;
}

@media (max-width: 700px) {
  * {
    font-size: 80%;
  }
}

`;
