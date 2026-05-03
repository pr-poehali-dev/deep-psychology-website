import Icon from "@/components/ui/icon";

const TEXTURE_IMG = "https://cdn.poehali.dev/projects/ac4d39a4-7c44-4b6b-a658-c32495453897/files/8cce02b1-376f-4f4c-bf9a-c65e78beb0a7.jpg";

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
    highlight: false,
  },
  {
    icon: "Sparkles",
    title: "Терапия для подростков",
    desc: "Бережная работа с подростками до 18 лет: самооценка, отношения, тревога, поиск себя.",
    price: "3 000 ₽",
    duration: "60 мин",
    highlight: false,
  },
  {
    icon: "Heart",
    title: "Телесно-ориентированная работа",
    desc: "Исследование телесных зажимов, восстановление контакта с телом и эмоциями.",
    price: "5 000 ₽",
    duration: "75 мин",
    highlight: false,
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

export default function ServicesReviews() {
  return (
    <>
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
            {SERVICES.map((s, i) => (
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
                  <div
                    className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-light"
                    style={{ background: "hsl(22,40%,55%)", color: "hsl(36,30%,96%)" }}
                  >
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
    </>
  );
}
