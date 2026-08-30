import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo.jsx";
import { MagneticButton } from "./MagneticButton.jsx";
import { NAV_LINKS } from "../data/site.js";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = NAV_LINKS.map((item) => item.href.slice(1));
      let current = "#inicio";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#inicio" aria-label="EOS Engenharia Sustentável — início">
          <Logo />
        </a>
        <nav className="nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <MagneticButton href="whatsapp" className="btn-gold">
          Solicitar orçamento
        </MagneticButton>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="drawer"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <MagneticButton href="whatsapp" className="btn-gold">
              Solicitar orçamento
            </MagneticButton>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
