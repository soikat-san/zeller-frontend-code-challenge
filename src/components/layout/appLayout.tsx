import { ThemeToggle } from "../common/themeToggle";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg text-gray-900 dark:text-white">
          Zeller Coding Assessment
        </h1>

        <ThemeToggle />
      </header>

      <main className="p-4">{children}</main>
    </div>
  );
};
