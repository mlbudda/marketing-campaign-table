import React from "react";
import ReactDOM from "react-dom";
import SingleEntry from "../components/SingleEntry";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<SingleEntry />", () => {
  it("given props data, renders info correctly", () => {
    render(
      <table>
        <tbody>
          <SingleEntry
            key="1"
            name="Campaign 1"
            startDate="01/01/2022"
            endDate="05/01/2022"
            budget="10000"
            user="Unknown User"
            userLoading="true"
          />
        </tbody>
      </table>
    );
    const name = screen.getByRole("cell", { name: /campaign 1/i });
    const startDate = screen.getByRole("cell", { name: "01/01/2022" });
    const endDate = screen.getByRole("cell", { name: "05/01/2022" });
    const budget = screen.getByRole("cell", { name: "10K USD" });

    expect(name).toBeInTheDocument();
    expect(startDate).toBeInTheDocument();
    expect(endDate).toBeInTheDocument();
    expect(budget).toBeInTheDocument();
  });
  it("given active campaign date, renders active status", () => {
    render(
      <table>
        <tbody>
          <SingleEntry
            key="1"
            name="Campaign 2 Active"
            startDate="01/01/2021"
            endDate="05/01/2022"
            budget="10000"
            user="Unknown User"
            userLoading="false"
          />
        </tbody>
      </table>
    );

    const statusActive = screen.getByLabelText(/active/i);
    expect(statusActive).toBeInTheDocument();
  });
  it("given inactive campaign date, renders inactive status", () => {
    render(
      <table>
        <tbody>
          <SingleEntry
            key="1"
            name="Campaign 2 Inactive"
            startDate="01/01/2021"
            endDate="05/01/2021"
            budget="10000"
            user="Unknown User"
            userLoading="false"
          />
        </tbody>
      </table>
    );

    const status = screen.getByLabelText(/inactive/i);
    expect(status).toBeInTheDocument();
  });
});
