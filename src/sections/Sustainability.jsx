import { Reveal } from "../components/Reveal.jsx";

export function Sustainability() {
  return (
    <section className="section">
      <div className="wrap sustain-layout">
        <Reveal>
          <p className="kicker">Sustentabilidade</p>
          <h2 className="display" style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.9rem)", margin: "0.7rem 0 1rem" }}>
            Energia limpa. Decisões inteligentes.
          </h2>
          <p className="muted" style={{ maxWidth: "36rem" }}>
            Sustentabilidade, na EOS, é consequência da engenharia bem feita:
            sistemas pensados para durar, operar com segurança e acompanhar o
            cliente depois da instalação.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="sustain-panel">
            <img
              src="/images/ground-mount.webp"
              alt="Arranjos fotovoltaicos instalados no solo pela EOS"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
