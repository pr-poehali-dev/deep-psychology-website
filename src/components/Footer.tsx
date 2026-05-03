import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
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
                <Icon
                  name={c.icon}
                  size={14}
                  fallback="Circle"
                  className="shrink-0"
                  style={{ color: "hsl(22,35%,50%)" } as React.CSSProperties}
                />
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
  );
}
