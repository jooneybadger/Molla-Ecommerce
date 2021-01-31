import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Routes from "./Routes";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("eCommerce")
);
