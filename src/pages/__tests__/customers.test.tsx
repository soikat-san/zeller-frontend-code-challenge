import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { Suspense } from "react";
import Customers from "../customers";
import { useCustomers } from "../../hooks/useCustomers";
import type { Customer, Role } from "../../types/customer";

vi.mock("../../hooks/useCustomers", () => ({
  useCustomers: vi.fn(),
}));

vi.mock("../../components/common/skeleton", () => ({
  default: () => <div data-testid="skeleton" />,
}));

vi.mock("../../components/common/error", () => ({
  default: ({ onRetry }: { onRetry: () => void }) => (
    <button onClick={onRetry}>Retry</button>
  ),
}));

vi.mock("../../components/customers/list", () => ({
  default: ({ customers }: { customers: Customer[] }) => (
    <div>
      {customers.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  ),
}));

vi.mock("../../components/customers/filter", () => ({
  default: ({ onChange }: { onChange: (role: Role | null) => void }) => (
    <div>
      <button onClick={() => onChange("ADMIN")}>Admin</button>
      <button onClick={() => onChange("MANAGER")}>Manager</button>
      <button onClick={() => onChange(null)}>Clear</button>
    </div>
  ),
}));

const renderWithSuspense = (ui: React.ReactNode) => {
  return render(<Suspense fallback={<div>loading...</div>}>{ui}</Suspense>);
};

describe("Customers page", () => {
  const useCustomersMock = useCustomers as Mock;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows loading skeleton", () => {
    useCustomersMock.mockReturnValue({
      customers: [],
      loading: true,
      error: null,
      refetch: vi.fn(),
    });

    renderWithSuspense(<Customers />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("shows error state", async () => {
    const mockRefetch = vi.fn();

    useCustomersMock.mockReturnValue({
      customers: [],
      loading: false,
      error: new Error("error"),
      refetch: mockRefetch,
    });

    renderWithSuspense(<Customers />);

    const retryBtn = await screen.findByText(/retry/i);
    fireEvent.click(retryBtn);

    expect(mockRefetch).toHaveBeenCalled();
  });

  it("renders customers list", async () => {
    useCustomersMock.mockReturnValue({
      customers: [
        { id: "1", name: "John", role: "ADMIN", email: "john@test.com" },
        { id: "2", name: "Jane", role: "MANAGER", email: "jane@test.com" },
      ],
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    renderWithSuspense(<Customers />);

    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText("Jane")).toBeInTheDocument();
  });

  it("filters customers by role", async () => {
    useCustomersMock.mockReturnValue({
      customers: [
        { id: "1", name: "John", role: "ADMIN", email: "john@test.com" },
        { id: "2", name: "Jane", role: "MANAGER", email: "jane@test.com" },
      ],
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    renderWithSuspense(<Customers />);

    fireEvent.click(await screen.findByText("Admin"));
    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(screen.queryByText("Jane")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Manager"));
    expect(await screen.findByText("Jane")).toBeInTheDocument();
    expect(screen.queryByText("John")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Clear"));
    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText("Jane")).toBeInTheDocument();
  });
});
