import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import EmptyView from "../empty";

vi.mock("../../assets/nodata.webp", () => ({
  default: "mock-image",
}));

describe("EmptyView", () => {
  it("renders empty state message", () => {
    render(<EmptyView />);

    expect(screen.getByText(/no customers found/i)).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(<EmptyView />);

    const img = screen.getByAltText(/no customers found/i);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
    expect(img.getAttribute("src")).toContain("nodata");
  });

  it("has correct accessibility attributes", () => {
    render(<EmptyView />);

    const section = screen.getByRole("status");

    expect(section).toHaveAttribute("aria-live", "polite");
  });

  it("renders heading as semantic h2", () => {
    render(<EmptyView />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/no customers found/i);
  });
});
