import React from "react";
import { shallow } from 'enzyme';
import Main from "./Main";

it("renders without crashing", () => {
  shallow(<Main />);
});
