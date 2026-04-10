import type { FC } from "react";
import CustomerItem from "./item";
import EmptyView from "../common/empty";
import type { Customer, Role } from "../../types/customer";

type Props = {
  role: Role | null;
  customers: Customer[];
};

const CustomersList: FC<Props> = ({ role, customers }) => {
  return (
    <section aria-labelledby="customers-heading">
      <h2
        id="customers-heading"
        className="text-md sm:text-lg font-semibold mb-4 dark:text-neutral-200"
      >
        {`List of ${role ?? "All"} Customers`}
      </h2>

      {!customers.length ? (
        <EmptyView />
      ) : (
        <ul className="space-y-4">
          {customers.map((customer) => (
            <CustomerItem key={customer.id} customer={customer} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default CustomersList;
