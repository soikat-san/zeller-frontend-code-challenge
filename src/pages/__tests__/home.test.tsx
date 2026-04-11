import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { act } from "react";
import Home from "../home";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("@lottiefiles/dotlottie-react", () => ({
  DotLottieReact: () => <div data-testid="lottie" />,
}));

describe("Home page", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockNavigate.mockClear();
  });

  const advance = (ms: number) => {
    act(() => {
      vi.advanceTimersByTime(ms);
    });
  };

  it("renders first animation initially", () => {
    render(<Home />);
    expect(screen.getByTestId("lottie")).toBeInTheDocument();
  });

  it("moves to second animation after 5 seconds", () => {
    render(<Home />);

    advance(5000);

    expect(screen.getByTestId("lottie")).toBeInTheDocument();
  });

  it("shows CTA after sequential 10 seconds", () => {
    render(<Home />);

    advance(5000);
    advance(5000);

    expect(screen.getByText(/please click the button/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("navigates to customers on button click", () => {
    render(<Home />);

    advance(5000);
    advance(5000);

    const button = screen.getByRole("button", {
      name: /go to customers page/i,
    });

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/customers");
  });
});
