import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ErrorComponent from "../error";

vi.mock("../../assets/error-robot.png", () => ({
  default: "mock-image",
}));

describe("ErrorComponent", () => {
  it("renders error message", () => {
    render(<ErrorComponent />);

    expect(screen.getByText(/failed to load customers/i)).toBeInTheDocument();
  });

  it("renders retry button and triggers onRetry", async () => {
    const mockRetry = vi.fn();

    render(<ErrorComponent onRetry={mockRetry} />);

    const button = screen.getByRole("button", {
      name: /retry loading customers/i,
    });

    fireEvent.click(button);

    expect(mockRetry).toHaveBeenCalled();
  });

  it("has correct accessibility attributes", () => {
    render(<ErrorComponent />);

    const section = screen.getByRole("alert");

    expect(section).toHaveAttribute("aria-live", "assertive");
  });

  it("renders image with correct alt text", () => {
    render(<ErrorComponent />);

    const img = screen.getByAltText(
      /illustration showing an error loading customers/i,
    );

    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute("src");
    expect(img.getAttribute("src")).toContain("error");
  });
});
