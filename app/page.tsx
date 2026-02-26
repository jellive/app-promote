import { Metadata } from "next";
import { HomePageJsonLd } from "@/components/seo/json-ld";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { BlogSection } from "@/components/sections/blog-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "개발자 Jell - 풀스택 개발자 포트폴리오",
  description:
    "8년+ 경력의 풀스택 개발자. iOS, Flutter, Web, AR/3D 등 18개 프로젝트 | Senior 포지션 구직 중",
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
      <ContactSection />
    </>
  );
}
