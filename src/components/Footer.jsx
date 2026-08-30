import { Logo } from "./Logo.jsx";
import { COMPANY, NAV_LINKS, whatsappUrl } from "../data/site.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p style={{ marginTop: "1rem", maxWidth: "28rem", color: "rgba(255,255,255,0.7)" }}>
            {COMPANY.name}. Engenharia, energia solar e instalações elétricas em Goiânia.
          </p>
        </div>
        <nav className="footer-links" aria-label="Rodapé">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-links">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">
            WhatsApp {COMPANY.whatsappDisplay}
          </a>
          <a href={`tel:+${COMPANY.phoneRaw}`}>{COMPANY.phoneDisplay}</a>
          <a href={COMPANY.siteUrl} target="_blank" rel="noreferrer">
            {COMPANY.siteDisplay}
          </a>
          <p className="muted" style={{ color: "rgba(255,255,255,0.62)" }}>
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
            <br />
            {COMPANY.city}
          </p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 {COMPANY.name}. Todos os direitos reservados.</span>
        <span className="tech-label">Goiânia — GO</span>
      </div>
    </footer>
  );
}
