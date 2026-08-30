import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { PROCESS } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

export function Process() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.65"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="processo" className="section" style={{ background: "#efece4" }}>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Como funciona</p>
          <h2 className="display">Do primeiro contato ao pós-venda.</h2>
        </Reveal>
        <div className="process-track" ref={ref}>
          <div className="process-line" aria-hidden="true">
            <motion.div
              style={{
                width: 2,
                height: "100%",
                background: "#d6a31b",
                transformOrigin: "top",
                scaleY: reduce ? 1 : pathLength,
              }}
            />
          </div>
          <ol className="process-steps">
            {PROCESS.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.04}>
                <li className="process-step">
                  <span className="dot is-on" />
                  <span>
                    <span className="idx">{step.index}</span>
                    <h3>{step.title}</h3>
                  </span>
                  <p className="muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
