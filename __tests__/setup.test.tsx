/**
 * @fileoverview TDD Validation Test - Jest Setup Verification
 * This test validates that Jest and React Testing Library are properly configured.
 */
import { render, screen } from '@testing-library/react';

// Simple test component
function TestComponent({ message }: { message: string }) {
  return <div role="alert">{message}</div>;
}

describe('Jest Setup Validation', () => {
  it('should have jest-dom matchers available', () => {
    render(<TestComponent message="Hello Test" />);

    const element = screen.getByRole('alert');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Hello Test');
  });

  it('should render React components correctly', () => {
    const { container } = render(<TestComponent message="Test Message" />);

    expect(container.querySelector('div')).toBeTruthy();
  });

  it('should support RTL queries', () => {
    render(<TestComponent message="RTL Query Test" />);

    // getByRole query
    expect(screen.getByRole('alert')).toBeInTheDocument();

    // getByText query
    expect(screen.getByText('RTL Query Test')).toBeInTheDocument();
  });
});
