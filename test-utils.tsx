import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

// Add providers as needed (ThemeProvider, etc.)
interface AllTheProvidersProps {
  children: ReactNode;
}

function AllTheProviders({ children }: AllTheProvidersProps) {
  return (
    <>
      {/* Add providers here as they are implemented */}
      {/* e.g., <ThemeProvider>{children}</ThemeProvider> */}
      {children}
    </>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { userEvent } from '@testing-library/user-event';

// Override render with our custom render
export { customRender as render };
