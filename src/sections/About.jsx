import { Reveal } from "../components/Reveal.jsx";

const pillars = [
  { title: "Atendimento", text: "Organização desde o primeiro contato." },
  { title: "Transparência", text: "Clareza em cada etapa do projeto." },
  { title: "Acompanhamento", text: "Presença contínua até a entrega." },
  { title: "Pós-venda", text: "O projeto continua depois da instalação." },
];

export function About() {
  return (
    <section id="a-eos" className="section">
      <div className="wrap split">
        <Reveal>
          <div className="about-visual">
            <img
              src="/images/office.webp"
              alt="Escritório da EOS Engenharia Sustentável, com logotipo e equipamentos de campo"
              loading="lazy"
            />
            <div className="about-offset">
              <img
                src="/images/award.webp"
                alt="Equipe da EOS em evento do setor, com reconhecimento institucional"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="kicker">A EOS</p>
          <h2 className="display" style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.8rem)", margin: "0.7rem 0 1rem" }}>
            Mais do que instalar. Nós acompanhamos.
          </h2>
          <p className="muted" style={{ maxWidth: "38rem" }}>
            A EOS Engenharia Sustentável atua em energia solar, engenharia e
            instalações elétricas em Goiânia. O diferencial identificado por quem
            já contratou a empresa é o acompanhamento — da primeira conversa à
            entrega e ao pós-venda.
          </p>
          <div className="pillar-list">
            {pillars.map((item) => (
              <div className="pillar" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
