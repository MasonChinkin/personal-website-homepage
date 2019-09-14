import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <>
    {/* Home Page */}
    <Route path={`/`} component={Home} />
  </>
)
export default App;