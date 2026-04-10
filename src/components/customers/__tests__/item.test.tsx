import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CustomerItem from "../item";
import type { Customer } from "../../../types/customer";

vi.mock("lucide-react", () => ({
  UserCog: () => <svg data-testid="admin-icon" />,
  UserStar: () => <svg data-testid="manager-icon" />,
}));

describe("CustomerItem", () => {
  const adminCustomer: Customer = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "ADMIN",
  };

  const managerCustomer: Customer = {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "MANAGER",
  };

  it("renders customer name, email and role", () => {
    render(<CustomerItem customer={adminCustomer} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText(/role: admin/i)).toBeInTheDocument();
  });

  it("renders avatar with first letter", () => {
    render(<CustomerItem customer={adminCustomer} />);

    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("has accessible avatar label", () => {
    render(<CustomerItem customer={adminCustomer} />);

    expect(screen.getByLabelText(/avatar for john doe/i)).toBeInTheDocument();
  });

  it("renders Admin icon for ADMIN role", () => {
    render(<CustomerItem customer={adminCustomer} />);

    expect(screen.getByTestId("admin-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("manager-icon")).not.toBeInTheDocument();
  });

  it("renders Manager icon for MANAGER role", () => {
    render(<CustomerItem customer={managerCustomer} />);

    expect(screen.getByTestId("manager-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("admin-icon")).not.toBeInTheDocument();
  });
});
