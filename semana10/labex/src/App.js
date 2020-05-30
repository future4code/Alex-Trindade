import React from "react";
import Styled from 'styled-components'
import Router from "./components/Router";
import { createBrowserHistory } from "history";

const Body = Styled.div`
  border: 1px solid red;
  display: flex;
  width: 100vw;
  justify-content: center;
`

export const history = createBrowserHistory();

const App = () => {
  return (
    <Body>
      <Router history={history} />
    </Body>
  );
};

export default App;
