import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotFoundView from "../notfound";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("@lottiefiles/dotlottie-react", () => ({
  DotLottieReact: () => <div data-testid="lottie" />,
}));

vi.mock("lucide-react", () => ({
  House: () => <svg data-testid="home-icon" />,
}));

describe("NotFoundView", () => {
  it("renders lottie animation", () => {
    render(<NotFoundView />);

    expect(screen.getByTestId("lottie")).toBeInTheDocument();
  });

  it("renders button with correct text", () => {
    render(<NotFoundView />);

    expect(screen.getByText(/let's go home/i)).toBeInTheDocument();
  });

  it("button is accessible via aria-label", () => {
    render(<NotFoundView />);

    expect(
      screen.getByRole("button", {
        name: /go back to home page/i,
      }),
    ).toBeInTheDocument();
  });

  it("navigates to home on button click", () => {
    render(<NotFoundView />);

    const button = screen.getByRole("button", {
      name: /go back to home page/i,
    });

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
