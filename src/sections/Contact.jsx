import { MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, telUrl, whatsappUrl } from "../data/site.js";
import { MagneticButton } from "../components/MagneticButton.jsx";
import { Reveal } from "../components/Reveal.jsx";

export function Contact() {
  return (
    <section id="contato" className="section">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="kicker">Contato</p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 4.8vw, 4rem)", margin: "0.6rem 0 1rem" }}>
            Vamos conversar?
          </h2>
          <p>
            <strong>{COMPANY.name}</strong>
          </p>
          <p className="muted" style={{ marginTop: "0.7rem" }}>
            {COMPANY.addressLine1}
            <br />
            {COMPANY.addressLine2}
            <br />
            {COMPANY.city}, {COMPANY.postalCode}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {COMPANY.phoneDisplay}
            <br />
            WhatsApp: {COMPANY.whatsappDisplay}
            <br />
            <a href={COMPANY.siteUrl} target="_blank" rel="noreferrer">
              {COMPANY.siteDisplay}
            </a>
          </p>
          <div className="contact-actions">
            <MagneticButton href="whatsapp" className="btn-gold">
              <MessageCircle size={16} />
              WhatsApp
            </MagneticButton>
            <MagneticButton href={telUrl()} className="btn-navy">
              <Phone size={16} />
              Ligar
            </MagneticButton>
            <MagneticButton
              href={COMPANY.mapsUrl}
              className="btn-line"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              Ver localização
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="map-block">
            <div>
              <p className="tech-label">Localização</p>
              <h3 className="display">{COMPANY.city}</h3>
              <p className="muted" style={{ marginTop: "0.6rem" }}>
                {COMPANY.addressLine2}
              </p>
            </div>
            <MagneticButton
              href={COMPANY.mapsUrl}
              className="btn-navy"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
