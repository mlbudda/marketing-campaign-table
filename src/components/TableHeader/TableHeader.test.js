import React from "react";
import renderer from "react-test-renderer";
import TableHeader from "./TableHeader";

it("renders correctly", () => {
  const tree = renderer.create(<TableHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
