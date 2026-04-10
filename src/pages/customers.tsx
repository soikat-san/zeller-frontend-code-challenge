import { useCustomers } from "../hooks/useCustomers";
import type { Customer, Role } from "../types/customer";
import { lazy, Suspense, useMemo, useState } from "react";
const CustomersList = lazy(() => import("../components/customers/list"));
const CustomersFilter = lazy(() => import("../components/customers/filter"));

type RoleFilter = Role | null;

export const Customers = () => {
  const { customers = [], loading, error } = useCustomers();
  const [roleFilter, setRoleFilter] = useState<RoleFilter>(null);

  const filteredCustomers = useMemo(() => {
    if (!roleFilter) return customers;
    return customers.filter((c: Customer) => c.role === roleFilter);
  }, [customers, roleFilter]);

  if (loading) return <p role="status">Loading customers...</p>;
  if (error) return <p role="alert">Failed to load customers</p>;

  return (
    <main className="sm:p-6 p-0.5 space-y-6">
      <Suspense fallback={<p>Loading filter...</p>}>
        <CustomersFilter selectedRole={roleFilter} onChange={setRoleFilter} />
      </Suspense>

      <Suspense fallback={<p>Loading list...</p>}>
        <CustomersList role={roleFilter} customers={filteredCustomers} />
      </Suspense>
    </main>
  );
};
