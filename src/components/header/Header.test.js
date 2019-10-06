import React from "react";
import ReactDom from 'react-dom';
import Header from "./Header";
import { createMemoryHistory } from 'history';

it("renders without crashing", () => {
  const div = document.createElement('div');
  const history = createMemoryHistory('/');
  ReactDom.render(<Header history={history} />, div);
  ReactDom.unmountComponentAtNode(div);
});
