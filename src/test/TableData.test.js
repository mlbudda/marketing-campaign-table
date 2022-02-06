// Test if shows with wrong date
import TableData from "../components/TableData";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<TableData />", () => {
  it.skip("oke", () => {
    const mockCampaigns = [{}];
    const mockDate = {
      startDate: "",
      endDate: "",
    };
    render(
      <TableData
        selectProductFromState={mockCampaigns}
        startDate={mockDate.startDate}
        endDate={mockDate.endDate}
      />
    );
  });
});

// Test if no data worksnpm test

// Test if search works

// Test if date range works
