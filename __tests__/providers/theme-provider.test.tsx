/**
 * @fileoverview Tests for ThemeProvider component
 * TDD: RED phase - Write tests first
 */

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/providers/theme-provider';

describe('ThemeProvider', () => {
  it('should render children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <ThemeProvider>
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
  });

  it('should not throw when mounting', () => {
    expect(() =>
      render(
        <ThemeProvider>
          <div>Content</div>
        </ThemeProvider>
      )
    ).not.toThrow();
  });
});
