import "@testing-library/jest-dom";

// Mock window.matchMedia for next-themes
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Next.js router
jest.mock("next/navigation", () => ({
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
    return "";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage(props: Record<string, unknown>) {
    // Render a real <img> element — next/image-only props are stripped so they
    // don't leak onto the DOM node and trigger React unknown-prop warnings.
    const React = require("react");
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
    return React.createElement("img", imgProps);
  },
}));
