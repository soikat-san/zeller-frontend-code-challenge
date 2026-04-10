import type { FC } from "react";
import type { Role } from "../../types/customer";

type Props = {
  selectedRole: Role | null;
  onChange: (role: Role | null) => void;
};

const CustomersFilter: FC<Props> = ({ selectedRole, onChange }) => {
  return (
    <section aria-labelledby="filter-heading">
      <h2
        id="filter-heading"
        className="text-md sm:text-lg font-semibold mb-3 dark:text-neutral-200"
      >
        User Types
      </h2>

      <fieldset className="flex flex-wrap gap-2">
        <legend className="sr-only">Filter by role</legend>

        <label className="flex items-center gap-2 cursor-pointer w-full sm:flex-1 p-5 rounded-2xl hover:bg-blue-100 dark:hover:bg-slate-500 dark:text-neutral-200">
          <input
            type="radio"
            name="role"
            value="ADMIN"
            checked={selectedRole === "ADMIN"}
            onChange={() => onChange(selectedRole === "ADMIN" ? null : "ADMIN")}
            className="accent-blue-500"
          />
          <span className="text-sm sm:text-lg">Admin</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer w-full sm:flex-1 p-5 rounded-2xl hover:bg-blue-100 dark:hover:bg-slate-500 dark:text-neutral-200">
          <input
            type="radio"
            name="role"
            value="MANAGER"
            checked={selectedRole === "MANAGER"}
            onChange={() =>
              onChange(selectedRole === "MANAGER" ? null : "MANAGER")
            }
            className="accent-blue-500"
          />
          <span className="text-sm sm:text-lg">Manager</span>
        </label>

        {selectedRole && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="w-full sm:flex-1 text-sm cursor-pointer text-blue-600 border p-5 border-blue-500 rounded-2xl hover:bg-blue-100 dark:text-neutral-200 dark:border-slate-500 dark:hover:bg-slate-500"
          >
            Clear filter
          </button>
        )}
      </fieldset>
    </section>
  );
};

export default CustomersFilter;
