import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CustomersFilter from "../filter";
import type { Role } from "../../../types/customer";

describe("CustomersFilter", () => {
  const setup = (selectedRole: Role | null = null) => {
    const onChange = vi.fn();

    render(<CustomersFilter selectedRole={selectedRole} onChange={onChange} />);

    return { onChange };
  };

  it("renders heading and options", () => {
    setup();

    expect(screen.getByText(/user types/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/admin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/manager/i)).toBeInTheDocument();
  });

  it("selects Admin when clicked", () => {
    const { onChange } = setup();

    fireEvent.click(screen.getByLabelText(/admin/i));

    expect(onChange).toHaveBeenCalledWith("ADMIN");
  });

  it("selects Manager when clicked", () => {
    const { onChange } = setup();

    fireEvent.click(screen.getByLabelText(/manager/i));

    expect(onChange).toHaveBeenCalledWith("MANAGER");
  });

  it("shows clear button only when a role is selected", () => {
    setup(null);
    expect(
      screen.queryByRole("button", { name: /clear/i }),
    ).not.toBeInTheDocument();

    setup("ADMIN");
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
  });

  it("clears selection when clear button is clicked", () => {
    const { onChange } = setup("ADMIN");

    fireEvent.click(screen.getByRole("button", { name: /clear/i }));

    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("reflects checked state correctly", () => {
    setup("ADMIN");

    const adminRadio = screen.getByLabelText(/admin/i) as HTMLInputElement;
    const managerRadio = screen.getByLabelText(/manager/i) as HTMLInputElement;

    expect(adminRadio.checked).toBe(true);
    expect(managerRadio.checked).toBe(false);
  });
});
