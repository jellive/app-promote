import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
    };
  },
  usePathname() {
    return '';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props: Record<string, unknown>) {
    // Return a simple object that represents an img element
    const imgProps = { ...props };
    delete imgProps.priority;
    delete imgProps.loading;
    delete imgProps.quality;
    delete imgProps.placeholder;
    delete imgProps.blurDataURL;
    delete imgProps.fill;
    delete imgProps.sizes;
    delete imgProps.loader;
    delete imgProps.unoptimized;
    return imgProps;
  },
}));
