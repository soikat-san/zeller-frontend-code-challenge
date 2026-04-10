import type { FC } from "react";
import { UserCog, UserStar } from "lucide-react";
import type { Customer } from "../../types/customer";

type Props = {
  customer: Customer;
};

const CustomerItem: FC<Props> = ({ customer }) => {
  const showAdminHover = "hover:bg-amber-100 dark:hover:bg-mist-600";
  const showManagerHover = "hover:bg-indigo-100 dark:hover:bg-mauve-600";
  const onHover = customer.role === "ADMIN" ? showAdminHover : showManagerHover;

  return (
    <li
      className={`p-4 border dark:border-neutral-200 rounded-2xl cursor-default ${onHover}`}
    >
      <div className="grid grid-cols-12 gap-4 items-center">
        <div
          className="col-span-2 sm:col-span-6 lg:col-span-2 w-10 h-10 flex items-center justify-center bg-gray-200 rounded-xl"
          aria-label={`Avatar for ${customer.name}`}
        >
          {customer.name.charAt(0)}
        </div>

        <div className="col-span-10 sm:col-span-6 lg:col-span-4">
          <h3 className="font-medium dark:text-neutral-200">{customer.name}</h3>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p className="text-gray-600 dark:text-neutral-300">
            {customer.email}
          </p>
        </div>

        <div className="col-span-12 sm:col-span-4 lg:col-span-2 flex items-center gap-2">
          {customer.role === "ADMIN" ? (
            <UserCog
              className="w-4 h-4 dark:text-neutral-200"
              aria-hidden="true"
            />
          ) : (
            <UserStar
              className="w-4 h-4 dark:text-neutral-200"
              aria-hidden="true"
            />
          )}

          <span className="text-sm text-gray-600 dark:text-neutral-300">
            Role: {customer.role}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CustomerItem;
