import React, { FC, Fragment } from "react";
import Calendar from "./pages/Calendar";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    min-width: 320px;
    overflow-x: hidden;
    margin-bottom: 60px;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Calendar />
    </Fragment>
  );
};

export default App;
