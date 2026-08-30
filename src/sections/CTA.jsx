import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton.jsx";
import { Reveal } from "../components/Reveal.jsx";

export function CTA() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Reveal>
          <p className="kicker" style={{ color: "#071422" }}>
            Próximo passo
          </p>
          <h2 className="display">Vamos transformar seu projeto em energia.</h2>
          <p>Converse com a EOS e descubra uma solução pensada para sua necessidade.</p>
          <MagneticButton href="whatsapp" className="btn-navy">
            Falar com a EOS
            <ArrowUpRight size={16} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
