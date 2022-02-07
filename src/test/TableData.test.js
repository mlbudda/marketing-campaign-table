import React from "react";
import ReactDOM from "react-dom";
import TableData from "../components/TableData";
import "@testing-library/jest-dom/extend-expect";
import { store } from "../app/store";
import { Provider } from "react-redux";

describe("<TableData />", () => {
  let container;
  const data = [
    {
      id: 1,
      name: "Divavu",
      startDate: "9/19/2019",
      endDate: "3/9/2020",
      Budget: 88377,
      userId: 15,
    },
    {
      id: 2,
      name: "Jaxspan",
      startDate: "11/21/2017",
      endDate: "2/21/2018",
      Budget: 608715,
      userId: 6,
    },
    {
      id: 1,
      name: "Campaign with wrong date",
      startDate: "9/19/2019",
      endDate: "3/9/2018",
      Budget: 88377,
      userId: 15,
    },
  ];

  beforeEach(() => {
    container = document.createElement("table");
  });

  it("renders data when data provided", () => {
    const render = (component) => ReactDOM.render(component, container);
    render(
      <Provider store={store}>
        <TableData selectProductFromState={data} keyword={""} usersData={[]} />
      </Provider>
    );
    expect(container.textContent).toMatch("Divavu");
    expect(container.textContent).toMatch("Jaxspan");
  });
  it("renders 'no data' when no data provided", () => {
    const render = (component) => ReactDOM.render(component, container);
    render(
      <Provider store={store}>
        <TableData selectProductFromState={[]} />
      </Provider>
    );
    expect(container.textContent).toMatch("No data");
  });
  it("given wrong date, won't show in the list", () => {
    const render = (component) => ReactDOM.render(component, container);
    render(
      <Provider store={store}>
        <TableData selectProductFromState={data} keyword={""} usersData={[]} />
      </Provider>
    );
    expect(container.textContent).not.toMatch("Campaign with wrong date");
  });
  it("given keyword in search, renders correct search result", () => {
    const render = (component) => ReactDOM.render(component, container);
    render(
      <Provider store={store}>
        <TableData
          selectProductFromState={data}
          keyword={"Jaxspan"}
          usersData={[]}
        />
      </Provider>
    );
    expect(container.textContent).not.toMatch("Divavu");
    expect(container.textContent).toMatch("Jaxspan");
  });
});
