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
        <legend className="sr-only">User type filter</legend>

        {/* Admin */}
        <label
          className="flex items-center gap-2 cursor-pointer w-full sm:flex-1 p-5 rounded-2xl 
                         hover:bg-blue-100 dark:hover:bg-slate-500 dark:text-neutral-200
                         focus-within:ring-0"
        >
          <input
            type="radio"
            name="role"
            value="ADMIN"
            checked={selectedRole === "ADMIN"}
            onChange={() => onChange("ADMIN")}
            className="accent-blue-500"
          />
          <span className="text-sm sm:text-lg">Admin</span>
        </label>

        {/* Manager */}
        <label
          className="flex items-center gap-2 cursor-pointer w-full sm:flex-1 p-5 rounded-2xl 
                         hover:bg-blue-100 dark:hover:bg-slate-500 dark:text-neutral-200
                         focus-within:ring-0"
        >
          <input
            type="radio"
            name="role"
            value="MANAGER"
            checked={selectedRole === "MANAGER"}
            onChange={() => onChange("MANAGER")}
            className="accent-blue-500"
          />
          <span className="text-sm sm:text-lg">Manager</span>
        </label>

        {/* Clear */}
        {selectedRole && (
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Clear selected filter"
            className="w-full sm:flex-1 text-sm cursor-pointer text-blue-600 border p-5 border-blue-500 rounded-2xl 
                       hover:bg-blue-100 dark:text-neutral-200 dark:border-slate-500 dark:hover:bg-slate-500
                       focus-visible:ring-0"
          >
            Clear filter
          </button>
        )}
      </fieldset>
    </section>
  );
};

export default CustomersFilter;
