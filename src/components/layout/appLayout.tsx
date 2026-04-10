import { MoveLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../common/themeToggle";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col max-w-[1920px] mx-auto bg-mist-50 dark:bg-zinc-900 transition-colors">
      <header className="flex justify-between items-center sm:px-9 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          {!isHome && (
            <button onClick={() => navigate("/")}>
              <MoveLeft className="mr-4 cursor-pointer dark:text-neutral-200" />
            </button>
          )}
          <h1 className="text-xs sm:text-lg text-gray-900 dark:text-white">
            Zeller Coding Assessment
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="text-center text-xs py-4 text-gray-500 dark:text-neutral-400 border-t border-gray-200 dark:border-gray-700">
        Built by Soikat Chakrabarty • Frontend Assessment
      </footer>
    </div>
  );
};
