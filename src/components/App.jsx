import React from 'react';
import { Route } from 'react-router-dom';
import Home from './main/Home';
import Header from './main/Header';

const App = () => (
  <>
    {/* Header */}
    <Route path={`/`} component={Header} />
    {/* Home Page */}
    <Route exact path={`/`} component={Home} />
  </>
)
export default App;