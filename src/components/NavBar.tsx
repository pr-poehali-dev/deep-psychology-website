import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface NavBarProps {
  scrollTo: (href: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
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
          onClick={() => handleScrollTo("#hero")}
          className="font-display text-xl font-light tracking-wide"
          style={{ color: "hsl(25,20%,20%)" }}
        >
          Ирина <em className="italic" style={{ color: "hsl(22,35%,38%)" }}>Бирюкова</em>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleScrollTo(item.href)}
              className="nav-link font-body text-sm font-light transition-colors"
              style={{ color: "hsl(25,15%,45%)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(22,35%,38%)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(25,15%,45%)")}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo("#booking")}
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
              onClick={() => handleScrollTo(item.href)}
              className="font-body text-base font-light text-left"
              style={{ color: "hsl(25,20%,28%)" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo("#booking")}
            className="mt-2 px-5 py-3 rounded-full font-body text-sm font-light"
            style={{ background: "hsl(22,35%,38%)", color: "hsl(36,30%,96%)" }}
          >
            Записаться
          </button>
        </div>
      )}
    </nav>
  );
}
