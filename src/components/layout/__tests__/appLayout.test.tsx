import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { AppLayout } from "../appLayout";
import { useNavigate, useLocation } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

vi.mock("../../common/themeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

describe("AppLayout", () => {
  const mockNavigate = vi.fn();

  const useNavigateMock = useNavigate as Mock;
  const useLocationMock = useLocation as Mock;

  beforeEach(() => {
    vi.clearAllMocks();
    useNavigateMock.mockReturnValue(mockNavigate);
  });

  it("renders children content", () => {
    useLocationMock.mockReturnValue({ pathname: "/" });

    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does NOT show back button on home route", () => {
    useLocationMock.mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.queryByRole("button");
    expect(backButton).not.toBeInTheDocument();
  });

  it("shows back button on non-home route", () => {
    useLocationMock.mockReturnValue({ pathname: "/customers" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.getByRole("button");
    expect(backButton).toBeInTheDocument();
  });

  it("navigates to home when back button is clicked", () => {
    useLocationMock.mockReturnValue({ pathname: "/customers" });

    render(<AppLayout>Content</AppLayout>);

    const backButton = screen.getByRole("button");
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("renders header title", () => {
    useLocationMock.mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(
      screen.getByText(/zeller frontend coding assessment/i),
    ).toBeInTheDocument();
  });

  it("renders footer content", () => {
    useLocationMock.mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(
      screen.getByText(/built by soikat chakrabarty/i),
    ).toBeInTheDocument();
  });

  it("renders theme toggle", () => {
    useLocationMock.mockReturnValue({ pathname: "/" });

    render(<AppLayout>Content</AppLayout>);

    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });
});
