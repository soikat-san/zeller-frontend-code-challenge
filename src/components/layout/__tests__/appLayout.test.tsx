import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AppLayout } from "../appLayout";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

vi.mock("../../common/themeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

import { useNavigate, useLocation } from "react-router-dom";

describe("AppLayout", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as any).mockReturnValue(mockNavigate);
  });

  it("renders children content", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });

    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does NOT show back button on home route", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.queryByRole("button");
    expect(backButton).not.toBeInTheDocument();
  });

  it("shows back button on non-home route", () => {
    (useLocation as any).mockReturnValue({ pathname: "/customers" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.getByRole("button");
    expect(backButton).toBeInTheDocument();
  });

  it("navigates to home when back button is clicked", () => {
    (useLocation as any).mockReturnValue({ pathname: "/customers" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.getByRole("button");

    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("renders header title", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(
      screen.getByText(/zeller frontend coding assessment/i),
    ).toBeInTheDocument();
  });

  it("renders footer content", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(
      screen.getByText(/built by soikat chakrabarty/i),
    ).toBeInTheDocument();
  });

  it("renders theme toggle", () => {
    (useLocation as any).mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });
});
