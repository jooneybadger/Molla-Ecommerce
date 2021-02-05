import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
  };
  button {
    display:flex;
    cursor:pointer;
    outline: none;
    border-radius: 5px;
  };
  input {
    display:flex;
    outline: none;
  }
`;

export default GlobalStyle;
