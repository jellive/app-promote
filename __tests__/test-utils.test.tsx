/**
 * @fileoverview TDD Validation Test - Custom Render Utilities
 * This test validates that custom render utilities work correctly.
 */
import { render, screen } from "@/test-utils";

// Test component that uses provider context (placeholder for future providers)
function ProviderTestComponent() {
  return (
    <div data-testid="provider-test">
      <span>Provider context accessible</span>
    </div>
  );
}

describe("Custom Render Utilities", () => {
  it("should render components with custom render", () => {
    render(<ProviderTestComponent />);

    expect(screen.getByTestId("provider-test")).toBeInTheDocument();
  });

  it("should provide access to provider context", () => {
    render(<ProviderTestComponent />);

    // When providers are added, this test will verify they are accessible
    expect(screen.getByText("Provider context accessible")).toBeInTheDocument();
  });

  it("should work with all RTL queries", () => {
    render(<ProviderTestComponent />);

    // getByTestId
    expect(screen.getByTestId("provider-test")).toBeInTheDocument();

    // getByText
    expect(screen.getByText("Provider context accessible")).toBeInTheDocument();

    // queryByTestId (returns null if not found, instead of throwing)
    expect(screen.queryByTestId("non-existent")).toBeNull();
  });
});
