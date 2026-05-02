import localFont from "next/font/local";
import { Metadata, Viewport } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

// Self-hosted (originally Manrope + Space Mono via next/font/google).
// Korean DPI blocks fonts.googleapis.com from this network at build time
// (ETIMEDOUT during `next build`); shipping the woff2 files locally also
// removes the fonts.googleapis.com hop at runtime, improving LCP.
const fontHeading = localFont({
  src: "../public/fonts/manrope-variable.woff2",
  display: "swap",
  variable: "--font-heading",
  weight: "400 800",
});

const fontMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mono",
});

const fontBody = localFont({
  src: "../public/fonts/manrope-variable.woff2",
  display: "swap",
  variable: "--font-body",
  weight: "400 800",
});

const siteConfig = {
  name: "Jell Portfolio",
  description:
    "8년+ 경력 풀스택 개발자 Jell | iOS · Flutter · React · Next.js | 18개 프로젝트 | Senior 포지션 구직 중",
  url: "https://jell.kr",
  ogImage: "/og-image.png",
  author: {
    name: "Jell",
    email: "jellive7@gmail.com",
    url: "https://jell.kr",
  },
  keywords: [
    "풀스택 개발자",
    "iOS 개발자",
    "Flutter 개발자",
    "React 개발자",
    "Next.js",
    "프론트엔드",
    "백엔드",
    "앱 개발",
    "포트폴리오",
    "Jell",
    "시니어 개발자",
    "구직",
    "Senior Developer",
    "Open to Work",
    "LiDAR",
    "TDD",
    "Clean Architecture",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: "Jell - Full-Stack Developer | Open to Work",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jellive",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-dvh">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
