import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { JSX, SVGProps } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개발자 Jell'
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">Jell</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#apps"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Apps
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Jell
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter mt-2">
                  풀스택 개발자
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-4">
                  iOS, 프론트엔드를 넘어 사람들이 조금이라도 살기 편한
                  <br />
                  Application을 만들기 위해 노력하는 8년차 개발자입니다.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-x-4">
                  <Link
                    href="#apps"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    만들어온 앱 보기
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    연락하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="apps" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  만들어온 앱
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  그동안 만들었던 회사, 사이드 프로젝트를 확인해보세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <Image
                  src="/app-screenshot/knowrecorder.png"
                  width="400"
                  height="225"
                  alt="Knowrecorder"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: '400/225', objectFit: 'cover' }}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">KnowRecorder</h3>
                  <p className="text-sm text-muted-foreground">
                    선생님이 만든 학습자료를 학생들이 받아 그대로 음성, 영상을
                    통해 학습할 수 있는 iOS, android Flip-learning 앱입니다.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Image
                  src="/app-screenshot/knowlounge.png"
                  width="400"
                  height="225"
                  alt="App 2"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: '400/225', objectFit: 'cover' }}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">KnowLounge</h3>
                  <p className="text-sm text-muted-foreground">
                    선생님과 학생이 모여 실시간으로 교육이 가능한 iOS, android
                    화이트보드 앱입니다.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Image
                  src="/app-screenshot/alo.png"
                  width="400"
                  height="225"
                  alt="App 3"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: '400/225', objectFit: 'cover' }}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Alo</h3>
                  <p className="text-sm text-muted-foreground">
                    세상의 다양한 사람들과 랜덤으로 비디오 채팅을 할 수 있는
                    iOS, android 통화 앱입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                개발자로서 걸어온 길
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                저는 스타트업 회사에 iOS로 취직해 현재까지 약 8년여동안 개발을
                진행해왔습니다. 막연히 &quot;나도 앱 한번 만들어보고
                싶다&quot;라고 생각했던, 나만의 앱이 생긴 것에 뛸도록 기뻐했던
                것이 눈에 선합니다. 흔한 Todo 기능부터 Canvas, 3D 데이터 처리와
                비디오 스트리밍 등 고급 기능들을 하나하나 사용해보면서 디지털
                세계에는 무궁무진한 가능성이 있음을 믿고 있습니다.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                저는 단일 언어, 단일 분야로만의 개발을 지양하고, 보다 새로운
                분야를 전문적으로 탐구하기를 좋아합니다. 왕년에 했다는 말처럼
                무책임한 말은 없습니다. 저는 지금도 개발이 좋고, 사람들의 더
                나은 경험을 만드는 것이 좋습니다.
              </p>
            </div>
            {/* <div className="flex gap-4 lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Hire Me
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download CV
              </Link>
            </div> */}
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-7 items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                문의하기
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                문의하고 싶은 일이 있으시다면 언제든 연락바랍니다.
                <br />
                최대한 빠르게 확인하고 답변 드리겠습니다.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                />
                <Textarea
                  placeholder="Message"
                  className="max-w-lg flex-1"
                  rows={4}
                />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>

            <Link href="#apps" prefetch={false}>
              My Apps
            </Link>
            <Link href="#contact" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Apps</h3>
            <Link href="#" prefetch={false}>
              KnowRecorder
            </Link>
            <Link href="#" prefetch={false}>
              KnowLounge
            </Link>
            <Link href="#" prefetch={false}>
              Alo
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="https://blog.jell.kr" prefetch={false}>
              Blog
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="/privacy" prefetch={false}>
              Privacy Policy
            </Link>
            {/* <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link> */}
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="mailto:jellive7@gmail.com" prefetch={false}>
              Email
            </Link>
            <Link href="https://www.github.com/jellive" prefetch={false}>
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/han-goon-yoo-429980113/"
              prefetch={false}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
