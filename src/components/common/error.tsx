import robotError from "../../assets/error-robot.png";

type Props = {
  onRetry?: () => void;
};

const ErrorComponent = ({ onRetry }: Props) => {
  const handleRetry = async () => {
    if (onRetry) {
      await onRetry();
    }
  };

  return (
    <section
      role="alert"
      aria-live="assertive"
      className="flex items-center w-full md:w-2/3 mx-auto py-40"
    >
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold dark:text-neutral-200">
          Failed to load customers...
        </h2>
        <button
          onClick={handleRetry}
          aria-label="Retry loading customers"
          className="bg-amber-500 cursor-pointer dark:bg-slate-500 p-5 w-40 rounded-xl text-lg dark:text-amber-500 flex items-center justify-center gap-2"
        >
          {"Retry"}
        </button>
      </div>

      <img
        src={robotError}
        alt="Illustration showing an error loading customers"
        className="h-48 md:h-72 lg:h-100"
        loading="lazy"
      />
    </section>
  );
};

export default ErrorComponent;
