"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  BookOpen,
  FileDown,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = [
  "Full-Stack Developer",
  "iOS Developer",
  "AR/3D Specialist",
  "Tech Explorer",
];
const TYPING_SPEED = 100;
const DELETE_SPEED = 50;
const PAUSE_TIME = 2000;

function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
          return;
        }

        if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }

        if (isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }
      },
      isDeleting ? DELETE_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="font-mono text-primary">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 grid-pattern opacity-20"
        aria-hidden="true"
      />

      {/* Geometric Decorations */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-primary transform rotate-12 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-20 w-24 h-24 bg-accent transform -rotate-6 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary transform rotate-45 hidden lg:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8 stagger-fade-in">
              {/* Badge */}
              <div className="inline-block">
                <div className="px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                    aria-hidden="true"
                  />
                  OPEN TO WORK · 풀스택 / 프론트엔드 시니어
                </div>
              </div>

              {/* Name & Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                  <span className="block">안녕하세요,</span>
                  <span className="block mt-2 relative inline-block">
                    <span className="relative z-10">Jell</span>
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 block" />
                  </span>
                  <span className="block mt-2 text-muted-foreground">
                    입니다
                  </span>
                </h1>

                {/* Rotating Role */}
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold min-h-[3rem]">
                  <RotatingRole />
                </div>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl">
                <span className="font-bold text-foreground">8년+ 경력</span>의
                풀스택 개발자로,{" "}
                <span className="font-bold text-primary">18개의 프로젝트</span>
                를 통해 iOS, Web, AR/3D 등 다양한 플랫폼에서{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">사용자 경험을 혁신</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-secondary/30 -z-10" />
                </span>
                해왔습니다.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="brutal-shadow hover-brutal bg-foreground text-background hover:bg-foreground font-bold text-lg h-14 px-8"
                >
                  <Link href="#projects">
                    프로젝트 보기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="brutal-shadow-sm hover-lift border-2 border-foreground font-bold text-lg h-14 px-8"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    연락하기
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="brutal-shadow-sm hover-lift border-2 border-foreground font-bold text-lg h-14 px-8"
                >
                  <a href="/이력서_유한군.pdf" download>
                    <FileDown className="mr-2 h-5 w-5" />
                    이력서 다운로드
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="brutal-shadow hover-brutal bg-primary text-primary-foreground hover:bg-primary font-bold text-lg h-14 px-8"
                >
                  <a
                    href="https://jell-portfolio-3d.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Boxes className="mr-2 h-5 w-5" />
                    3D로 보기
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/jellive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground hover-brutal transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/han-goon-yoo-429980113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground hover-brutal transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://blog.jell.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground hover-brutal transition-all"
                  aria-label="Blog"
                >
                  <BookOpen className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div
              className="hidden lg:block relative stagger-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Code Block Decoration */}
              <div className="relative">
                {/* Main Code Card */}
                <div className="bg-card border-4 border-foreground brutal-shadow-lg p-8 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="ml-auto text-muted-foreground">
                      ~/portfolio
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-accent">const</span>{" "}
                      <span className="text-primary">developer</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">name</span>:{" "}
                      <span className="text-primary">&quot;Jell&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">experience</span>:{" "}
                      <span className="text-accent">&quot;8+ years&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">projects</span>:{" "}
                      <span className="text-accent">18</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">tests</span>:{" "}
                      <span className="text-accent">&quot;1,649+&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">coverage</span>:{" "}
                      <span className="text-accent">&quot;96.8%&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">status</span>:{" "}
                      <span className="text-primary">
                        &quot;open_to_work&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-secondary">seeking</span>: [
                    </div>
                    <div className="pl-8 text-primary">
                      &quot;Senior&quot;, &quot;FullStack&quot;
                    </div>
                    <div className="pl-4">],</div>
                    <div>{"}"}</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary border-4 border-foreground flex items-center justify-center brutal-shadow">
                  <Code2 className="w-10 h-10 text-background" />
                </div>

                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-secondary border-2 border-foreground font-bold brutal-shadow-sm">
                  <span className="text-foreground">100% PASSION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-24">
            {[
              { label: "경력", value: "8+", unit: "YEARS" },
              { label: "프로젝트", value: "18", unit: "PROJECTS" },
              { label: "테스트", value: "1.6K", unit: "TESTS" },
              { label: "커버리지", value: "96.8", unit: "%" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="border-2 border-foreground p-6 text-center hover-lift stagger-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold font-mono text-primary">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-1">
                  {stat.unit}
                </div>
                <div className="text-sm font-semibold mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-foreground animate-pulse" />
          </div>
          <span className="font-mono text-xs">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
