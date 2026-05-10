import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jell - Full-Stack Developer | Open to Work";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        fontFamily: "monospace",
        border: "8px solid #ffffff",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "#6366f1",
          flexShrink: 0,
        }}
      />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          padding: "48px 64px",
          gap: "48px",
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#ffffff",
              color: "#0a0a0a",
              padding: "8px 20px",
              fontWeight: 900,
              fontSize: "24px",
              letterSpacing: "0.1em",
              alignSelf: "flex-start",
            }}
          >
            {">"} JELL
          </div>

          {/* Name & Title */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {/* OPEN TO WORK badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#1e1b4b",
                border: "2px solid #6366f1",
                padding: "8px 16px",
                alignSelf: "flex-start",
                color: "#a5b4fc",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#4ade80",
                  flexShrink: 0,
                }}
              />
              OPEN TO WORK · 풀스택 / 프론트엔드 시니어
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              유한군
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#a1a1aa",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              Full-Stack Developer
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { value: "8+", label: "YEARS" },
              { value: "24", label: "PROJECTS" },
              { value: "96.8%", label: "BE COVERAGE" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #3f3f46",
                  padding: "12px 20px",
                  minWidth: "100px",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#71717a",
                    letterSpacing: "0.1em",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Skills */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            justifyContent: "center",
            width: "320px",
          }}
        >
          {[
            "Flutter / Dart",
            "React / Next.js",
            "TypeScript",
            "Spring Boot",
            "iOS / Swift",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "10px 16px",
                border: "2px solid #3f3f46",
                color: "#d4d4d8",
                fontSize: "18px",
                fontWeight: 600,
                backgroundColor: "#18181b",
              }}
            >
              {skill}
            </div>
          ))}
          <div
            style={{
              padding: "10px 16px",
              border: "2px solid #6366f1",
              color: "#a5b4fc",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#1e1b4b",
            }}
          >
            + 30개 더보기
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px 64px",
          borderTop: "2px solid #27272a",
          color: "#52525b",
          fontSize: "14px",
          letterSpacing: "0.05em",
          flexShrink: 0,
        }}
      >
        app.jell.kr
      </div>
    </div>,
    { ...size },
  );
}
