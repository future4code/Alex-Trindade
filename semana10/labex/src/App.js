import React from "react";
import "./App.css";
import Router from "./components/Router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return <Router history={history}/>;
}

export default App;
