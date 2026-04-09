import { useTheme } from "../../context/themeContext";

// TODO - fix icons and design
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border 
                 bg-gray-100 dark:bg-gray-700 
                 text-black dark:text-white"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};
