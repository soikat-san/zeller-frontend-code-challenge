import noData from "../../assets/nodata.webp";

const EmptyView = () => {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center text-center gap-4"
    >
      <img
        src={noData}
        alt="No customers found"
        className="h-48 md:h-72 lg:h-100"
        loading="lazy"
      />

      <h2 className="text-lg md:text-5xl font-semibold dark:text-neutral-200">
        No customers found
      </h2>
    </section>
  );
};

export default EmptyView;
