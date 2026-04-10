import { ThemeToggle } from "../common/themeToggle";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto bg-mist-50 dark:bg-zinc-900 transition-colors">
      <header className="flex justify-between items-center sm:px-9 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xs sm:text-lg text-gray-900 dark:text-white">
          Zeller Frontend Coding Assessment
        </h1>

        <ThemeToggle />
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
};
