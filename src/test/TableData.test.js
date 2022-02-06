import React from "react";
import ReactDOM from "react-dom";
import TableData from "../components/TableData";
import "@testing-library/jest-dom/extend-expect";

describe("<TableData />", () => {
  it("renders 'no data' when no data provided", () => {
    const container = document.createElement("table");
    const render = (component) => ReactDOM.render(component, container);
    render(<TableData selectProductFromState={[]} />);
    expect(container.textContent).toMatch("No data");
  });
});

// Test if no data worksnpm test

// Test if search works

// Test if date range works
