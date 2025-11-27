import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading'
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

const siteConfig = {
  name: 'Jell Portfolio',
  description: '8년차 풀스택 개발자 Jell의 포트폴리오. iOS, Flutter, React, Next.js 등 다양한 기술 스택으로 사용자 중심의 앱을 개발합니다.',
  url: 'https://jell.kr',
  ogImage: '/og-image.png',
  author: {
    name: 'Jell',
    email: 'jellive7@gmail.com',
    url: 'https://jell.kr',
  },
  keywords: [
    '풀스택 개발자',
    'iOS 개발자',
    'Flutter 개발자',
    'React 개발자',
    'Next.js',
    '프론트엔드',
    '백엔드',
    '앱 개발',
    '포트폴리오',
    'Jell',
  ],
}

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
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: siteConfig.name,
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
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@jellive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
