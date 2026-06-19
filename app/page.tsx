import { Metadata } from "next";
import dynamic from "next/dynamic";
import { HomePageJsonLd } from "@/components/seo/json-ld";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { BlogSection } from "@/components/sections/blog-section";
import { AboutSection } from "@/components/sections/about-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { Floating3DCTA } from "@/components/floating-3d-cta";

// 폴드 아래 무거운 Client Component는 지연 로딩 (초기 JS 번들 감소)
const ContactSection = dynamic(() =>
  import("@/components/sections/contact-section").then((m) => m.ContactSection),
);

export const metadata: Metadata = {
  title: "개발자 Jell - 풀스택 개발자 포트폴리오",
  description:
    "8년+ 경력의 풀스택 개발자. iOS, Flutter, Web, AR/3D 등 24개 프로젝트.",
};

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <AboutSection />
      <TimelineSection />
      <ContactSection />
      <Floating3DCTA />
    </>
  );
}
