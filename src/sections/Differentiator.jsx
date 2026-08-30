import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../components/Reveal.jsx";

export function Differentiator() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-dark diff" aria-labelledby="diff-title">
      <div className="diff-grid" aria-hidden="true" />
      <div className="diff-inner">
        <p className="kicker">O diferencial</p>
        <Reveal>
          <h2 id="diff-title" className="display">
            O projeto não termina na instalação.
          </h2>
        </Reveal>
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 2,
            width: "7rem",
            background: "#E4B423",
            marginTop: "1.6rem",
            transformOrigin: "left",
          }}
        />
        <Reveal delay={0.12}>
          <p>
            Da primeira conversa ao pós-venda, cada etapa é acompanhada para que o
            cliente tenha segurança, clareza e confiança durante todo o processo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
