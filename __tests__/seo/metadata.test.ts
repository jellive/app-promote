/**
 * @fileoverview Tests for SEO Metadata Configuration
 * TDD: Validate Next.js metadata settings in layout.tsx
 */

import fs from 'fs';
import path from 'path';

describe('SEO Metadata Configuration', () => {
  let layoutContent: string;

  beforeAll(() => {
    const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
    layoutContent = fs.readFileSync(layoutPath, 'utf-8');
  });

  describe('Site Configuration', () => {
    it('should have site name configured', () => {
      expect(layoutContent).toContain("name: 'Jell Portfolio'");
    });

    it('should have site description configured', () => {
      expect(layoutContent).toContain('description:');
      expect(layoutContent).toContain('풀스택 개발자');
    });

    it('should have site URL configured', () => {
      expect(layoutContent).toContain("url: 'https://jell.kr'");
    });

    it('should have author information', () => {
      expect(layoutContent).toContain('author:');
      expect(layoutContent).toContain("name: 'Jell'");
      expect(layoutContent).toContain('jellive7@gmail.com');
    });
  });

  describe('Metadata Export', () => {
    it('should export metadata object', () => {
      expect(layoutContent).toContain('export const metadata: Metadata');
    });

    it('should have metadataBase configured', () => {
      expect(layoutContent).toContain('metadataBase:');
    });

    it('should have title template configured', () => {
      expect(layoutContent).toContain('title:');
      expect(layoutContent).toContain('template:');
    });

    it('should have keywords array', () => {
      expect(layoutContent).toContain('keywords:');
      expect(layoutContent).toContain('풀스택 개발자');
      expect(layoutContent).toContain('iOS 개발자');
      expect(layoutContent).toContain('Flutter 개발자');
    });
  });

  describe('Open Graph Configuration', () => {
    it('should have openGraph configured', () => {
      expect(layoutContent).toContain('openGraph:');
    });

    it('should have og type as website', () => {
      expect(layoutContent).toContain("type: 'website'");
    });

    it('should have Korean locale', () => {
      expect(layoutContent).toContain("locale: 'ko_KR'");
    });

    it('should have og images configured', () => {
      expect(layoutContent).toContain('images:');
      expect(layoutContent).toContain('width: 1200');
      expect(layoutContent).toContain('height: 630');
    });
  });

  describe('Twitter Card Configuration', () => {
    it('should have twitter card configured', () => {
      expect(layoutContent).toContain('twitter:');
    });

    it('should use summary_large_image card', () => {
      expect(layoutContent).toContain("card: 'summary_large_image'");
    });

    it('should have twitter creator', () => {
      expect(layoutContent).toContain("creator: '@jellive'");
    });
  });

  describe('Robots Configuration', () => {
    it('should have robots configured', () => {
      expect(layoutContent).toContain('robots:');
    });

    it('should allow indexing', () => {
      expect(layoutContent).toContain('index: true');
    });

    it('should allow following', () => {
      expect(layoutContent).toContain('follow: true');
    });

    it('should have googleBot specific settings', () => {
      expect(layoutContent).toContain('googleBot:');
    });
  });

  describe('Icons Configuration', () => {
    it('should have favicon configured', () => {
      expect(layoutContent).toContain("icon: '/favicon.ico'");
    });

    it('should have favicon configured correctly', () => {
      expect(layoutContent).toContain("icons:");
    });
  });

  describe('Viewport Configuration', () => {
    it('should export viewport object', () => {
      expect(layoutContent).toContain('export const viewport: Viewport');
    });

    it('should have theme color for light mode', () => {
      expect(layoutContent).toContain("media: '(prefers-color-scheme: light)'");
    });

    it('should have theme color for dark mode', () => {
      expect(layoutContent).toContain("media: '(prefers-color-scheme: dark)'");
    });

    it('should have device-width configured', () => {
      expect(layoutContent).toContain("width: 'device-width'");
    });
  });

  describe('HTML Language', () => {
    it('should have Korean language set', () => {
      expect(layoutContent).toContain('lang="ko"');
    });
  });

  describe('Canonical URL', () => {
    it('should have canonical URL configured', () => {
      expect(layoutContent).toContain('alternates:');
      expect(layoutContent).toContain('canonical:');
    });
  });

  describe('Manifest', () => {
    it('should have web manifest configured', () => {
      expect(layoutContent).toContain("manifest: '/site.webmanifest'");
    });
  });
});
