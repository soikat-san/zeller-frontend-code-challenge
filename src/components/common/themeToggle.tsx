import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/themeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative cursor-pointer p-2 rounded-full border-0
             focus:outline-none
             focus-visible:ring-2
             focus-visible:ring-offset-2
             focus-visible:ring-amber-400 dark:focus-visible:ring-blue-400"
    >
      <span
        className={`absolute inset-0 rounded-full blur-md opacity-70 animate-pulse ${
          theme === "dark" ? "bg-amber-400/40" : "bg-blue-400/40"
        }`}
      />

      <span className="relative z-10">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 sm:w-10 sm:h-10 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] hover:scale-110 ease-in-out duration-300" />
        ) : (
          <Moon className="w-5 h-5 sm:w-10 sm:h-10 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] hover:scale-110 ease-in-out duration-300" />
        )}
      </span>
    </button>
  );
};
