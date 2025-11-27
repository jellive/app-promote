'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className={cn(
        'relative min-h-[calc(100vh-4rem)] flex items-center',
        'bg-background'
      )}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Profile Info */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              안녕하세요,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jell
              </span>
              입니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              풀스택 개발자
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            모바일부터 데스크톱까지, <strong className="text-foreground">8개의 프로젝트</strong>를
            통해 사용자 경험을 혁신하는 풀스택 개발자입니다.
            TypeScript와 React 생태계를 중심으로 안정적이고 확장 가능한 솔루션을 만듭니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                프로젝트 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                연락하기
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient background */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
