import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CustomersList from "../list";
import type { Customer } from "../../../types/customer";

vi.mock("../item", () => ({
  default: ({ customer }: any) => <div>{customer.name}</div>,
}));

vi.mock("../../common/empty", () => ({
  default: () => <div data-testid="empty-view">No data</div>,
}));

describe("CustomersList", () => {
  const customers: Customer[] = [
    { id: "1", name: "John", email: "john@test.com", role: "ADMIN" },
    { id: "2", name: "Jane", email: "jane@test.com", role: "MANAGER" },
  ];

  it("renders heading with 'All' when no role selected", () => {
    render(<CustomersList role={null} customers={customers} />);

    expect(screen.getByText(/list of all customers/i)).toBeInTheDocument();
  });

  it("renders heading with selected role", () => {
    render(<CustomersList role="ADMIN" customers={customers} />);

    expect(screen.getByText(/list of admin customers/i)).toBeInTheDocument();
  });

  it("renders empty view when no customers", () => {
    render(<CustomersList role={null} customers={[]} />);

    expect(screen.getByTestId("empty-view")).toBeInTheDocument();
  });

  it("renders list of customers", () => {
    render(<CustomersList role={null} customers={customers} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });

  it("renders correct number of customer items", () => {
    render(<CustomersList role={null} customers={customers} />);

    const items = screen.getAllByText(/john|jane/i);
    expect(items).toHaveLength(2);
  });
});
