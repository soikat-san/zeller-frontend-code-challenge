import { lazy, useMemo, useState } from "react";
import { useCustomers } from "../hooks/useCustomers";
import type { Customer, Role } from "../types/customer";
import CustomerSkeleton from "../components/common/skeleton";
import CustomersFilter from "../components/customers/filter";
const ErrorComponent = lazy(() => import("../components/common/error"));
const CustomersList = lazy(() => import("../components/customers/list"));

type RoleFilter = Role | null;

const Customers = () => {
  const { customers = [], loading, error, refetch } = useCustomers();
  const [roleFilter, setRoleFilter] = useState<RoleFilter>(null);

  const filteredCustomers = useMemo(() => {
    if (!roleFilter) return customers;
    return customers.filter((c: Customer) => c.role === roleFilter);
  }, [customers, roleFilter]);

  if (loading) return <CustomerSkeleton />;
  if (error) return <ErrorComponent onRetry={refetch} />;

  return (
    <main className="sm:p-6 p-0.5 space-y-6">
      <CustomersFilter selectedRole={roleFilter} onChange={setRoleFilter} />
      <CustomersList role={roleFilter} customers={filteredCustomers} />
    </main>
  );
};

export default Customers;
