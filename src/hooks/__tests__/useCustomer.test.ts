import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, type Mock } from "vitest";
import { useQuery } from "@apollo/client/react";
import { useCustomers } from "../useCustomers";
import type { CustomersResponse } from "../../types/customer";

vi.mock("@apollo/client/react", () => ({
  useQuery: vi.fn(),
}));

describe("useCustomers hook", () => {
  const useQueryMock = useQuery as unknown as Mock;

  it("returns customers data correctly", () => {
    const mockResponse: {
      data: CustomersResponse;
      loading: boolean;
      error: null;
      refetch: ReturnType<typeof vi.fn>;
    } = {
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
    };

    useQueryMock.mockReturnValue(mockResponse);

    const { result } = renderHook(() => useCustomers());

    expect(result.current.customers).toHaveLength(1);
    expect(result.current.customers[0].name).toBe("John Doe");
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
