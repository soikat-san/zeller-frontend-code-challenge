import { useQuery } from "@apollo/client/react";
import { LIST_ZELLER_CUSTOMERS } from "../graphql/queries";
import type { CustomersResponse } from "../types/customer";

export const useCustomers = () => {
  const { data, loading, error } = useQuery<CustomersResponse>(
    LIST_ZELLER_CUSTOMERS,
  );

  return {
    customers: data?.listZellerCustomers?.items ?? [],
    loading,
    error,
  };
};
