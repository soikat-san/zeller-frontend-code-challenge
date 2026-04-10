import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useQuery } from "@apollo/client/react";
import { useCustomers } from "../useCustomers";

vi.mock("@apollo/client/react", () => ({
  useQuery: vi.fn(),
}));

describe("useCustomers hook", () => {
  it("returns customers data correctly", () => {
    (useQuery as any).mockReturnValue({
      data: {
        listZellerCustomers: {
          items: [
            {
              id: "1",
              name: "John Doe",
              email: "john@test.com",
              role: "ADMIN",
            },
          ],
        },
      },
      loading: false,
      error: null,
      refetch: vi.fn(),
    });

    const { result } = renderHook(() => useCustomers());

    expect(result.current.customers).toHaveLength(1);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
