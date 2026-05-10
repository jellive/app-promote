import { Boxes } from "lucide-react";

export function Floating3DCTA() {
  return (
    <a
      href="https://jell-portfolio-3d.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="3D 포트폴리오 보기"
      className="fixed bottom-20 right-6 z-40 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-5 py-3 font-bold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
    >
      <Boxes className="h-5 w-5" />
      <span className="hidden sm:inline">3D로 보기</span>
    </a>
  );
}
