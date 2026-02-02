import { Shield, FileText, Mail, Calendar } from "lucide-react";

const privacy = (): JSX.Element => {
  return (
    <main className="min-h-screen py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-primary rotate-12 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/10 -rotate-6 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm">
              <Shield className="w-4 h-4" />
              <span>PRIVACY POLICY</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block">개인정보</span>
            <span className="block relative inline-block mt-2">
              <span className="relative z-10">처리방침</span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 block" />
            </span>
          </h1>

          <div className="p-6 border-4 border-foreground bg-card brutal-shadow mb-8">
            <p className="text-lg leading-relaxed">
              Jell(이하 &quot;회사&quot; 또는 &quot;우리&quot;)은 사용자의
              개인정보 보호를 매우 중요하게 생각하며,{" "}
              <span className="font-bold text-foreground">
                『개인정보 보호법』
              </span>{" "}
              및 관련 법령을 준수하고 있습니다.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              본 개인정보 처리방침은 회사에서 제공하는 서비스를 이용하는
              사용자로부터 수집하는 개인정보와 그 처리에 관한 사항을 규정하고
              있습니다.
            </p>
          </div>

          {/* Date Info */}
          <div className="flex flex-wrap gap-4 text-sm font-mono">
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">공고일자:</span>
              <span className="font-bold">2024년 9월 23일</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="text-muted-foreground">시행일자:</span>
              <span className="font-bold">2024년 9월 23일</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 */}
          <section className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-primary text-background font-mono text-lg font-bold border-2 border-foreground">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                수집하는 개인정보의 항목
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다:
            </p>
            <div className="p-4 border-2 border-foreground bg-background">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-bold text-foreground">
                    이메일 주소:
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    사용자 식별 및 서비스 이용을 위한 필수 정보
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-secondary text-foreground font-mono text-lg font-bold border-2 border-foreground">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보의 수집 및 이용 목적
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 수집한 개인정보를 다음과 같은 목적으로 이용합니다:
            </p>
            <div className="space-y-3">
              <div className="p-4 border-2 border-foreground bg-background">
                <span className="font-bold text-foreground">
                  • 서비스 제공 및 운영:
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  사용자의 데이터를 저장하고, 이를 기반으로 원활한 서비스 제공
                </span>
              </div>
              <div className="p-4 border-2 border-foreground bg-background">
                <span className="font-bold text-foreground">
                  • 사용자 식별 및 관리:
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  이메일 주소를 통해 사용자 계정을 생성하고 관리
                </span>
              </div>
              <div className="p-4 border-2 border-foreground bg-background">
                <span className="font-bold text-foreground">• 고객 지원:</span>
                <span className="text-muted-foreground">
                  {" "}
                  이메일을 통한 문의 및 지원 서비스 제공
                </span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-accent text-background font-mono text-lg font-bold border-2 border-foreground">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보의 보관 및 파기
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 사용자의 개인정보를 서비스 이용 기간 동안 보관하며,
              사용자가 서비스 탈퇴를 요청하거나 동의 철회를 요청할 경우 즉시
              해당 정보를 파기합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              단, 관련 법령에 의해 보관이 요구되는 경우에는 해당 법령에서 정한
              기간 동안 보관합니다.
            </p>
            <div className="space-y-3">
              <div className="p-4 border-2 border-foreground bg-background">
                <h3 className="font-bold text-foreground mb-2">
                  보관하는 개인정보
                </h3>
                <p className="text-muted-foreground">
                  이메일 주소 및 앱 사용 관련 데이터
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  보관 기간: 서비스 이용 기간 동안
                </p>
              </div>
              <div className="p-4 border-2 border-foreground bg-background">
                <h3 className="font-bold text-foreground mb-2">
                  파기 절차 및 방법
                </h3>
                <p className="text-muted-foreground">
                  전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-primary text-background font-mono text-lg font-bold border-2 border-foreground">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보의 제3자 제공
              </h2>
            </div>
            <div className="p-4 border-2 border-foreground bg-background">
              <p className="text-muted-foreground leading-relaxed">
                회사는{" "}
                <span className="font-bold text-foreground">
                  원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다.
                </span>{" "}
                단, 사용자의 사전 동의가 있거나 법령에 의하여 요구되는 경우에는
                예외로 합니다.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-secondary text-foreground font-mono text-lg font-bold border-2 border-foreground">
                5
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보의 처리 위탁
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 서비스 제공을 위해 아래와 같은 외부 업체에 개인정보 처리를
              위탁하고 있습니다:
            </p>
            <div className="p-4 border-2 border-foreground bg-background space-y-2">
              <p>
                <span className="font-bold text-foreground">위탁업체:</span>{" "}
                Google Firebase
              </p>
              <p>
                <span className="font-bold text-foreground">위탁 내용:</span>{" "}
                Firebase Firestore를 통한 이메일 주소 및 앱 사용 관련 데이터
                저장
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              회사는 위탁 업체가 개인정보 보호 관련 법령을 준수하도록 관리 및
              감독하고 있습니다.
            </p>
          </section>

          {/* Section 6 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-accent text-background font-mono text-lg font-bold border-2 border-foreground">
                6
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보 보호를 위한 기술적/관리적 조치
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
              있습니다:
            </p>
            <div className="space-y-3">
              <div className="p-4 border-2 border-foreground bg-background">
                <span className="font-bold text-foreground">• 접근 통제:</span>
                <span className="text-muted-foreground">
                  {" "}
                  개인정보에 대한 접근 권한을 최소한의 인원으로 제한
                </span>
              </div>
              <div className="p-4 border-2 border-foreground bg-background">
                <span className="font-bold text-foreground">
                  • 보안 시스템:
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  해킹 및 외부 침입 방지를 위한 보안 시스템 운영
                </span>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-primary text-background font-mono text-lg font-bold border-2 border-foreground">
                7
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                사용자의 권리
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              사용자는 언제든지 자신의 개인정보 삭제를 요청할 수 있으며, 해당
              요청은 아래의 이메일을 통해 접수하실 수 있습니다. 요청이 접수되면
              관련 법령에 따라 개인정보가 처리됩니다.
            </p>
            <div className="p-4 border-2 border-foreground bg-primary/10">
              <p className="font-bold text-foreground mb-2">
                개인정보 삭제/탈퇴 요청:
              </p>
              <a
                href="mailto:jellive7@naver.com"
                className="text-primary font-mono font-bold hover:underline"
              >
                jellive7@naver.com
              </a>
            </div>
          </section>

          {/* Section 8 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-secondary text-foreground font-mono text-lg font-bold border-2 border-foreground">
                8
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                개인정보 보호 책임자 및 연락처
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              회사는 개인정보 보호에 대한 책임을 지기 위해 개인정보 보호
              책임자를 지정하고 있으며, 개인정보와 관련한 문의는 아래의 연락처로
              문의해주시기 바랍니다.
            </p>
            <div className="space-y-3">
              <div className="p-4 border-2 border-foreground bg-background">
                <p>
                  <span className="font-bold text-foreground">
                    개인정보 보호 책임자:
                  </span>{" "}
                  Jell
                </p>
              </div>
              <div className="p-4 border-2 border-foreground bg-background">
                <p className="font-bold text-foreground mb-2">연락처:</p>
                <a
                  href="mailto:jellive7@gmail.com"
                  className="text-primary font-mono font-bold hover:underline"
                >
                  jellive7@gmail.com
                </a>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section
            className="border-4 border-foreground bg-card p-6 md:p-8 brutal-shadow hover-brutal transition-all stagger-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="px-3 py-1 bg-accent text-background font-mono text-lg font-bold border-2 border-foreground">
                9
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">기타</h2>
            </div>
            <div className="p-4 border-2 border-foreground bg-background">
              <p className="text-muted-foreground leading-relaxed">
                본 개인정보 처리방침은 관련 법령 및 회사의 내부 방침에 따라
                변경될 수 있으며, 변경 시에는 어플 내 공지사항을 통해 안내드릴
                예정입니다.
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-8 border-4 border-foreground bg-card brutal-shadow-lg text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
            <p className="text-lg font-bold mb-4">
              개인정보 보호에 대한 문의사항이 있으신가요?
            </p>
            <a
              href="mailto:jellive7@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-2 border-foreground hover-lift transition-transform font-mono"
            >
              <Mail className="w-5 h-5" />
              <span>문의하기</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default privacy;
