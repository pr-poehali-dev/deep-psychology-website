import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ac4d39a4-7c44-4b6b-a658-c32495453897/files/46a7afba-689a-4113-9390-3cb0e598a808.jpg";
const TEXTURE_IMG = "https://cdn.poehali.dev/projects/ac4d39a4-7c44-4b6b-a658-c32495453897/files/8cce02b1-376f-4f4c-bf9a-c65e78beb0a7.jpg";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Gift",
    title: "Первая консультация",
    desc: "Знакомство без обязательств: обсуждаем ваш запрос, устанавливаем контакт — уже идёт работа. Если почувствуем взаимный отклик, записываемся на полноценную терапию.",
    price: "Бесплатно",
    duration: "15 мин",
    highlight: true,
  },
  {
    icon: "Brain",
    title: "Индивидуальная терапия",
    desc: "Глубокая работа с внутренними конфликтами, тревогой, страхами и паттернами поведения. Для взрослых.",
    price: "5 000 ₽",
    duration: "60 мин",
  },
  {
    icon: "Sparkles",
    title: "Терапия для подростков",
    desc: "Бережная работа с подростками до 18 лет: самооценка, отношения, тревога, поиск себя.",
    price: "3 000 ₽",
    duration: "60 мин",
  },
  {
    icon: "Heart",
    title: "Телесно-ориентированная работа",
    desc: "Исследование телесных зажимов, восстановление контакта с телом и эмоциями.",
    price: "5 000 ₽",
    duration: "75 мин",
  },
];

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

const REVIEWS = [
  {
    name: "Анна М.",
    text: "За полгода работы с Еленой я смогла отпустить тревогу, которая преследовала меня годами. Очень тонкий и глубокий подход.",
    tag: "Работа с тревогой",
  },
  {
    name: "Сергей К.",
    text: "Пришёл со скепсисом, ушёл с ощущением, что наконец понял, что происходило в моём теле и голове. Рекомендую.",
    tag: "Телесная терапия",
  },
  {
    name: "Марина Л.",
    text: "Удивительно, как Елена создаёт безопасное пространство. Я говорила о вещах, о которых никогда не решалась говорить вслух.",
    tag: "Личные границы",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(36,25%,97%)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "hsla(36,25%,97%,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 20px hsla(25,20%,20%,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="font-display text-xl font-light tracking-wide"
            style={{ color: "hsl(25,20%,20%)" }}
          >
            Ирина <em className="italic" style={{ color: "hsl(22,35%,38%)" }}>Бирюкова</em>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="nav-link font-body text-sm font-light transition-colors"
                style={{ color: "hsl(25,15%,45%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(22,35%,38%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25,15%,45%)")}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="px-5 py-2 rounded-full font-body text-sm font-light transition-all duration-200"
              style={{
                background: "hsl(22,35%,38%)",
                color: "hsl(36,30%,96%)",
              }}
            >
              Записаться
            </button>
          </div>

          <button
            className="md:hidden"
            style={{ color: "hsl(25,20%,28%)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
            style={{
              background: "hsla(36,25%,97%,0.98)",
              borderColor: "hsl(30,20%,88%)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="font-body text-base font-light text-left"
                style={{ color: "hsl(25,20%,28%)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="mt-2 px-5 py-3 rounded-full font-body text-sm font-light"
              style={{ background: "hsl(22,35%,38%)", color: "hsl(36,30%,96%)" }}
            >
              Записаться
            </button>
          </div>
        )}
      </nav>

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
                alt="Елена Соколова"
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

      {/* SERVICES */}
      <section id="services" className="py-28 relative overflow-hidden" style={{ background: "hsl(25,20%,20%)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${TEXTURE_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "luminosity",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <span
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "hsl(22,40%,65%)" }}
            >
              Услуги
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-4"
              style={{ color: "hsl(36,30%,92%)" }}
            >
              Форматы работы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s: typeof SERVICES[0] & { highlight?: boolean }, i) => (
              <div
                key={s.title}
                className="reveal p-8 rounded-3xl border transition-all duration-300"
                style={{
                  borderColor: s.highlight ? "hsl(22,40%,55%)" : "hsl(36,10%,35%)",
                  background: s.highlight ? "hsla(22,35%,38%,0.12)" : "transparent",
                  transitionDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(22,35%,65%)";
                  e.currentTarget.style.background = s.highlight ? "hsla(22,35%,38%,0.2)" : "hsl(25,20%,24%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = s.highlight ? "hsl(22,40%,55%)" : "hsl(36,10%,35%)";
                  e.currentTarget.style.background = s.highlight ? "hsla(22,35%,38%,0.12)" : "transparent";
                }}
              >
                {s.highlight && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-light"
                    style={{ background: "hsl(22,40%,55%)", color: "hsl(36,30%,96%)" }}>
                    ✦ Начните отсюда — это бесплатно
                  </div>
                )}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "hsla(22,35%,38%,0.3)" }}
                  >
                    <Icon name={s.icon} size={20} className="text-[hsl(22,40%,72%)]" fallback="Star" />
                  </div>
                  <div className="text-right">
                    <p
                      className="font-display text-xl font-light"
                      style={{ color: s.highlight ? "hsl(36,70%,80%)" : "hsl(22,40%,72%)" }}
                    >
                      {s.price}
                    </p>
                    <p className="font-body text-xs" style={{ color: "hsl(36,10%,55%)" }}>
                      {s.duration}
                    </p>
                  </div>
                </div>
                <h3
                  className="font-display text-2xl font-light mb-3"
                  style={{ color: "hsl(36,30%,92%)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: "hsl(36,10%,60%)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28" style={{ background: "hsl(36,20%,94%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "hsl(22,35%,38%)" }}
            >
              Отзывы
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-4"
              style={{ color: "hsl(25,20%,20%)" }}
            >
              Слова тех, кто прошёл путь
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={r.name}
                className="reveal rounded-3xl p-8 border"
                style={{
                  background: "hsl(36,25%,97%)",
                  borderColor: "hsl(30,20%,88%)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "hsl(22,50%,58%)", fontSize: "1.1rem" }}>★</span>
                  ))}
                </div>
                <p
                  className="font-body text-sm font-light leading-relaxed mb-6 italic"
                  style={{ color: "hsl(25,15%,38%)" }}
                >
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-display text-base font-light" style={{ color: "hsl(25,20%,25%)" }}>
                    {r.name}
                  </p>
                  <span
                    className="px-3 py-1 rounded-full font-body text-xs"
                    style={{
                      background: "hsl(36,20%,90%)",
                      color: "hsl(22,35%,38%)",
                    }}
                  >
                    {r.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <span
            className="font-body text-xs tracking-[0.2em] uppercase"
            style={{ color: "hsl(22,35%,38%)" }}
          >
            Запись
          </span>
          <h2
            className="font-display text-4xl md:text-6xl font-light mt-4 mb-6 leading-tight"
            style={{ color: "hsl(25,20%,20%)" }}
          >
            Сделайте первый шаг
          </h2>
          <p
            className="font-body text-base font-light mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "hsl(25,15%,45%)" }}
          >
            Первая консультация — бесплатно, 15 минут. Мы познакомимся, обсудим ваш запрос и сразу начнём контакт. Если почувствуем взаимный отклик — запишемся на полноценную терапию.
          </p>

          <div
            className="rounded-3xl p-8 md:p-12 text-left border"
            style={{
              background: "hsl(36,20%,94%)",
              borderColor: "hsl(30,20%,88%)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  className="font-body text-xs tracking-wider uppercase block mb-2"
                  style={{ color: "hsl(25,15%,45%)" }}
                >
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl font-body text-sm font-light border focus:outline-none transition-colors"
                  style={{
                    background: "hsl(36,25%,97%)",
                    borderColor: "hsl(30,20%,84%)",
                    color: "hsl(25,20%,25%)",
                  }}
                />
              </div>
              <div>
                <label
                  className="font-body text-xs tracking-wider uppercase block mb-2"
                  style={{ color: "hsl(25,15%,45%)" }}
                >
                  Телефон / Telegram
                </label>
                <input
                  type="text"
                  placeholder="+7 или @username"
                  className="w-full px-4 py-3 rounded-xl font-body text-sm font-light border focus:outline-none transition-colors"
                  style={{
                    background: "hsl(36,25%,97%)",
                    borderColor: "hsl(30,20%,84%)",
                    color: "hsl(25,20%,25%)",
                  }}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="font-body text-xs tracking-wider uppercase block mb-2"
                style={{ color: "hsl(25,15%,45%)" }}
              >
                С чем хотите поработать?
              </label>
              <textarea
                rows={3}
                placeholder="Опишите в нескольких словах…"
                className="w-full px-4 py-3 rounded-xl font-body text-sm font-light border focus:outline-none transition-colors resize-none"
                style={{
                  background: "hsl(36,25%,97%)",
                  borderColor: "hsl(30,20%,84%)",
                  color: "hsl(25,20%,25%)",
                }}
              />
            </div>
            <button
              className="w-full py-4 rounded-xl font-body font-light tracking-wide transition-all duration-300"
              style={{
                background: "hsl(22,35%,38%)",
                color: "hsl(36,30%,96%)",
              }}
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-20 border-t"
        style={{
          background: "hsl(36,20%,94%)",
          borderColor: "hsl(30,20%,88%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 reveal">
            <div>
              <p className="font-display text-2xl font-light mb-2" style={{ color: "hsl(25,20%,20%)" }}>
                Ирина <em className="italic" style={{ color: "hsl(22,35%,38%)" }}>Бирюкова</em>
              </p>
              <p className="font-body text-sm font-light" style={{ color: "hsl(25,15%,50%)" }}>
                Психолог · Телесная терапия
              </p>
            </div>
            <div className="space-y-3">
              <p
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: "hsl(22,35%,38%)" }}
              >
                Связь
              </p>
              {[
                { icon: "Mail", text: "irina@example.com" },
                { icon: "Phone", text: "+7 (999) 000-00-00" },
                { icon: "MessageCircle", text: "@irina_bpsy" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2">
                  <Icon name={c.icon} size={14} fallback="Circle" className="shrink-0" style={{ color: "hsl(22,35%,50%)" } as React.CSSProperties} />
                  <span className="font-body text-sm font-light" style={{ color: "hsl(25,15%,40%)" }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: "hsl(22,35%,38%)" }}
              >
                Приём
              </p>
              <p className="font-body text-sm font-light" style={{ color: "hsl(25,15%,40%)" }}>
                Очно: Сочи
              </p>
              <p className="font-body text-sm font-light" style={{ color: "hsl(25,15%,40%)" }}>
                Онлайн: Zoom / Telegram
              </p>
              <p className="font-body text-sm font-light" style={{ color: "hsl(25,15%,40%)" }}>
                Пн–Сб, 10:00 — 20:00
              </p>
            </div>
          </div>

          <div
            className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 reveal"
            style={{ borderColor: "hsl(30,20%,84%)" }}
          >
            <p className="font-body text-xs font-light" style={{ color: "hsl(25,10%,60%)" }}>
              © 2024 Ирина Бирюкова. Все права защищены.
            </p>
            <p className="font-body text-xs font-light" style={{ color: "hsl(25,10%,65%)" }}>
              Психолог · Гештальт · Телесная терапия
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}