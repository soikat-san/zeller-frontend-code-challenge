import type { FC } from "react";
import CustomerItem from "./item";
import type { Customer, Role } from "../../types/customer";

type Props = {
  role: Role | null;
  customers: Customer[];
};

const CustomersList: FC<Props> = ({ role, customers }) => {
  if (!customers.length) {
    return <p role="status">No customers found</p>;
  }

  return (
    <section aria-labelledby="customers-heading">
      <h2
        id="customers-heading"
        className="text-md sm:text-lg font-semibold mb-4 dark:text-neutral-200"
      >
        {`List of ${role ? role : "All"} Customers`}
      </h2>

      <ul className="space-y-4">
        {customers.map((customer) => (
          <CustomerItem key={customer.id} customer={customer} />
        ))}
      </ul>
    </section>
  );
};

export default CustomersList;
