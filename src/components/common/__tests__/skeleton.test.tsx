import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CustomerSkeleton from "../skeleton";

describe("CustomerSkeleton", () => {
  it("renders loading status container", () => {
    render(<CustomerSkeleton />);

    const status = screen.getByRole("status");
    expect(status).toBeInTheDocument();
    expect(status).toHaveAttribute("aria-live", "polite");
  });

  it("renders screen reader loading text", () => {
    render(<CustomerSkeleton />);

    expect(screen.getByText(/loading customers/i)).toBeInTheDocument();
  });

  it("renders correct number of skeleton list items", () => {
    render(<CustomerSkeleton />);

    const items = screen.getAllByRole("listitem", { hidden: true });
    expect(items).toHaveLength(5);
  });

  it("hides decorative elements from accessibility tree", () => {
    render(<CustomerSkeleton />);

    const hiddenElements = document.querySelectorAll('[aria-hidden="true"]');

    expect(hiddenElements.length).toBeGreaterThan(0);
  });

  it("ensures all skeleton list items are aria-hidden", () => {
    render(<CustomerSkeleton />);

    const items = screen.getAllByRole("listitem", { hidden: true });

    items.forEach((item) => {
      expect(item).toHaveAttribute("aria-hidden", "true");
    });
  });
});
