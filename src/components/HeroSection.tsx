const HERO_IMG = "https://cdn.poehali.dev/projects/ac4d39a4-7c44-4b6b-a658-c32495453897/files/46a7afba-689a-4113-9390-3cb0e598a808.jpg";
const TEXTURE_IMG = "https://cdn.poehali.dev/projects/ac4d39a4-7c44-4b6b-a658-c32495453897/files/8cce02b1-376f-4f4c-bf9a-c65e78beb0a7.jpg";

const APPROACH_ITEMS = [
  {
    num: "01",
    title: "Тело как ресурс",
    desc: "Психика и тело неразрывны. В работе я опираюсь на телесные сигналы как на прямой доступ к бессознательному.",
  },
  {
    num: "02",
    title: "Безоценочное пространство",
    desc: "Каждая встреча — это зона полной безопасности. Здесь нет правильных и неправильных переживаний.",
  },
  {
    num: "03",
    title: "Интеграция методов",
    desc: "Гештальт, соматические практики и работа с образами — я выбираю инструменты под вас, а не наоборот.",
  },
  {
    num: "04",
    title: "Долгосрочный эффект",
    desc: "Цель — не снять симптом, а изменить отношение к себе и миру. Результаты остаются с вами навсегда.",
  },
];

interface HeroSectionProps {
  scrollTo: (href: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-25 animate-float-blob pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(22,40%,78%) 0%, hsl(85,18%,74%) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(355,30%,82%) 0%, transparent 70%)",
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            animation: "floatBlob 12s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up">
            <p
              className="font-body text-sm font-light tracking-[0.2em] uppercase mb-6"
              style={{ color: "hsl(22,35%,38%)" }}
            >
              Психолог · Телесная терапия
            </p>
            <h1
              className="font-display text-5xl md:text-7xl font-light leading-[1.1] mb-8"
              style={{ color: "hsl(25,20%,20%)" }}
            >
              Встреча <br />
              <em className="italic" style={{ color: "hsl(22,35%,38%)" }}>с собой</em> <br />
              начинается здесь
            </h1>
            <p
              className="font-body text-base font-light leading-relaxed mb-10 max-w-md"
              style={{ color: "hsl(25,15%,45%)" }}
            >
              Работаю на стыке психологии, телесных практик и работы с
              подсознанием. Помогаю найти путь к себе через тело, образы и
              безопасный диалог.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#booking")}
                className="px-8 py-4 rounded-full font-body font-light transition-all duration-300"
                style={{ background: "hsl(22,35%,38%)", color: "hsl(36,30%,96%)" }}
              >
                Записаться на сессию
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="px-8 py-4 rounded-full font-body font-light border transition-all duration-300"
                style={{
                  borderColor: "hsl(30,20%,78%)",
                  color: "hsl(25,20%,28%)",
                }}
              >
                Узнать больше
              </button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div
              className="relative w-full overflow-hidden animate-float-blob"
              style={{
                aspectRatio: "4/5",
                animationDuration: "10s",
              }}
            >
              <img
                src={HERO_IMG}
                alt="Ирина Бирюкова"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, hsla(22,35%,38%,0.2), transparent)",
                }}
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 border"
              style={{
                background: "hsl(36,25%,97%)",
                borderColor: "hsl(30,20%,90%)",
                boxShadow: "0 8px 30px hsla(25,20%,20%,0.1)",
              }}
            >
              <p className="font-display text-3xl font-light" style={{ color: "hsl(22,35%,38%)" }}>8+</p>
              <p className="font-body text-xs font-light" style={{ color: "hsl(25,15%,45%)" }}>лет практики</p>
            </div>
            <div
              className="absolute -top-4 -right-4 rounded-2xl px-5 py-3 border"
              style={{
                background: "hsl(36,25%,97%)",
                borderColor: "hsl(30,20%,90%)",
                boxShadow: "0 8px 30px hsla(25,20%,20%,0.1)",
              }}
            >
              <p className="font-body text-xs font-light" style={{ color: "hsl(25,15%,45%)" }}>онлайн и очно</p>
              <p className="font-display text-lg font-light" style={{ color: "hsl(25,20%,20%)" }}>Сочи</p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "hsl(25,15%,55%)" }}
        >
          <span className="font-body text-xs tracking-widest uppercase">Листайте</span>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, hsl(25,15%,55%), transparent)" }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28" style={{ background: "hsl(36,20%,94%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal" style={{ transitionDelay: "0.1s" }}>
            <div
              className="w-full aspect-square overflow-hidden"
              style={{ borderRadius: "40% 60% 55% 45% / 55% 45% 55% 45%" }}
            >
              <img src={TEXTURE_IMG} alt="Природные текстуры" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute top-8 right-[-16px] w-[160px] h-[160px]"
              style={{
                background: "hsl(85,18%,70%)",
                opacity: 0.35,
                borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                zIndex: -1,
              }}
            />
          </div>

          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <span
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "hsl(22,35%,38%)" }}
            >
              Обо мне
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight"
              style={{ color: "hsl(25,20%,20%)" }}
            >
              Я верю, что <em className="italic" style={{ color: "hsl(22,35%,38%)" }}>тело знает</em> путь домой
            </h2>
            <p
              className="font-body text-base font-light leading-relaxed mb-5"
              style={{ color: "hsl(25,15%,40%)" }}
            >
              Меня зовут Ирина Бирюкова. Я работаю с людьми, которые
              чувствуют внутренний разлад — когда голова говорит одно, тело
              другое, а душа молчит.
            </p>
            <p
              className="font-body text-base font-light leading-relaxed mb-8"
              style={{ color: "hsl(25,15%,40%)" }}
            >
              Моя практика объединяет гештальт-подход, телесно-ориентированную
              терапию и работу с образами. Это позволяет работать сразу на
              нескольких уровнях — быстро и в глубину.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Гештальт", "Соматика", "МАК-терапия", "Работа с травмой"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full font-body text-sm font-light border"
                  style={{
                    background: "hsl(36,25%,97%)",
                    borderColor: "hsl(30,20%,84%)",
                    color: "hsl(25,20%,35%)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "hsl(22,35%,38%)" }}
            >
              Подход
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight"
              style={{ color: "hsl(25,20%,20%)" }}
            >
              Как я работаю
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {APPROACH_ITEMS.map((item, i) => (
              <div
                key={item.num}
                className="reveal p-8 rounded-3xl border transition-all duration-300 group"
                style={{
                  borderColor: "hsl(30,20%,88%)",
                  transitionDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(22,35%,60%)";
                  e.currentTarget.style.background = "hsl(36,20%,94%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(30,20%,88%)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  className="font-display text-5xl font-light"
                  style={{ color: "hsla(22,35%,38%,0.25)" }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-display text-2xl font-light mt-3 mb-3"
                  style={{ color: "hsl(25,20%,20%)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: "hsl(25,15%,45%)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
