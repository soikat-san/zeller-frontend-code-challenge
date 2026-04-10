const CustomerSkeleton = () => {
  return (
    <div role="status" aria-live="polite">
      <section className="p-5">
        <div
          aria-hidden="true"
          className="h-5 w-32 mb-3 rounded bg-gray-300 dark:bg-slate-600 animate-pulse"
        />

        <div aria-hidden="true" className="flex flex-wrap gap-2">
          <div className="w-full sm:flex-1 p-5 rounded-2xl bg-gray-200 dark:bg-slate-700 animate-pulse flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-slate-500" />
            <div className="h-4 w-20 rounded bg-gray-300 dark:bg-slate-500" />
          </div>

          <div className="w-full sm:flex-1 p-5 rounded-2xl bg-gray-200 dark:bg-slate-700 animate-pulse flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-slate-500" />
            <div className="h-4 w-24 rounded bg-gray-300 dark:bg-slate-500" />
          </div>

          <div className="w-full sm:flex-1 p-5 rounded-2xl bg-gray-200 dark:bg-slate-700 animate-pulse">
            <div className="h-4 w-28 mx-auto rounded bg-gray-300 dark:bg-slate-500" />
          </div>
        </div>
      </section>

      <section aria-labelledby="customers-heading" className="px-5 py-10">
        <div
          aria-hidden="true"
          className="h-5 w-48 mb-4 rounded bg-gray-300 dark:bg-slate-600 animate-pulse"
        />

        <ul className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <li
              key={i}
              aria-hidden="true"
              className="flex items-center gap-4 p-4 border rounded-lg 
                       border-gray-200 dark:border-slate-700 
                       bg-white dark:bg-gray-800 
                       animate-pulse"
            >
              <div className="w-10 h-10 rounded bg-gray-300 dark:bg-slate-600" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 rounded bg-gray-300 dark:bg-slate-600" />
                <div className="h-3 w-1/4 rounded bg-gray-200 dark:bg-slate-500" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <span className="sr-only">Loading customers...</span>
    </div>
  );
};

export default CustomerSkeleton;
