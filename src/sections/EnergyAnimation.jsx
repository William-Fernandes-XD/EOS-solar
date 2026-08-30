import { useReducedMotion } from "motion/react";
import { Reveal } from "../components/Reveal.jsx";
import { EnergyFlow } from "../animations/EnergyFlow.jsx";

export function EnergyAnimation() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-dark" aria-labelledby="energia-title">
      <div className="wrap energy-stage">
        <Reveal>
          <p className="kicker">Energia solar</p>
          <h2
            id="energia-title"
            className="display"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", margin: "0.7rem 0 1rem" }}
          >
            O sol como fonte. A engenharia como caminho.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "34rem" }}>
            A luz chega ao módulo, a engenharia organiza o fluxo e a energia
            encontra o uso — residência ou empresa — com precisão e clareza.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <EnergyFlow reduceMotion={reduce} />
        </Reveal>
      </div>
    </section>
  );
}
