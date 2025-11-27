import Link from 'next/link'
import { Metadata } from 'next'
import { HomePageJsonLd } from '@/components/seo/json-ld'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { projectsData } from '@/data/projects'

export const metadata: Metadata = {
  title: '개발자 Jell - 풀스택 개발자 포트폴리오',
  description: '8년+ 경력의 풀스택 개발자. iOS, Web, AR/3D 등 15개 이상의 프로젝트를 통해 사용자 경험을 혁신해왔습니다.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <HomePageJsonLd />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <Link
            href="/"
            className="flex items-center justify-center font-bold text-lg text-foreground"
            prefetch={false}
          >
            Jell
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              프로젝트
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              기술 스택
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              소개
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              연락하기
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#projects" prefetch={false}>
              프로젝트
            </Link>
            <Link href="#skills" prefetch={false}>
              기술 스택
            </Link>
            <Link href="#about" prefetch={false}>
              소개
            </Link>
            <Link href="#contact" prefetch={false}>
              연락하기
            </Link>
          </div>
          <div className="grid gap-1 col-span-2 sm:col-span-1">
            <h3 className="font-semibold">프로젝트</h3>
            {projectsData.slice(0, 5).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} prefetch={false}>
                {project.name}
              </Link>
            ))}
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="https://blog.jell.kr" prefetch={false} target="_blank" rel="noopener noreferrer">
              Blog
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="/privacy" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="mailto:jellive7@gmail.com" prefetch={false}>
              Email
            </Link>
            <Link href="https://www.github.com/jellive" prefetch={false} target="_blank" rel="noopener noreferrer">
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/han-goon-yoo-429980113/"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mx-auto mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
