import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, type Mock } from "vitest";
import { ThemeToggle } from "../themeToggle";
import { useTheme } from "../../../context/themeContext";

vi.mock("../../../context/themeContext", () => ({
  useTheme: vi.fn(),
}));

describe("ThemeToggle", () => {
  const useThemeMock = useTheme as Mock;

  it("renders moon icon when theme is light", () => {
    useThemeMock.mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", {
      name: /toggle theme/i,
    });

    expect(button).toBeInTheDocument();

    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders sun icon when theme is dark", () => {
    useThemeMock.mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", {
      name: /toggle theme/i,
    });

    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("calls toggleTheme on click", () => {
    const toggleThemeMock = vi.fn();

    useThemeMock.mockReturnValue({
      theme: "light",
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", {
      name: /toggle theme/i,
    });

    fireEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("has proper accessibility attributes", () => {
    useThemeMock.mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", {
      name: /toggle theme/i,
    });

    expect(button).toHaveAttribute("aria-label", "Toggle theme");
  });
});
