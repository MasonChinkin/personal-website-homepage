import React from "react";
import { Route } from "react-router-dom";
import Main from "./main/Main";
import Header from "./header/Header";

const App = () => (
  <>
    {/* Header */}
    <Route path={`/`} component={Header} />
    {/* Main Page */}
    <Route exact path={`/`} component={Main} />
  </>
);
export default App;
