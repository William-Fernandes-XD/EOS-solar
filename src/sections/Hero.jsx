import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { TechnicalOverlay } from "../components/TechnicalOverlay.jsx";
import { MagneticButton } from "../components/MagneticButton.jsx";
import { COMPANY } from "../data/site.js";

const chips = [
  { label: "ENERGIA", top: "22%", left: "6%" },
  { label: "ENGENHARIA", top: "38%", right: "8%" },
  { label: "SUSTENTABILIDADE", bottom: "28%", left: "58%" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <section id="inicio" className="hero" ref={ref}>
      <div className="hero-frame">
        <motion.div className="hero-media" style={{ y }}>
          <motion.img
            src="/images/hero.webp"
            alt="Vista aérea de instalação fotovoltaica residencial da EOS, com técnico sobre o telhado"
            fetchPriority="high"
            decoding="async"
            initial={reduce ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <div className="hero-shade" />
        <TechnicalOverlay />
        {chips.map((chip, i) => (
          <motion.div
            key={chip.label}
            className="hero-chips"
            style={{ top: chip.top, left: chip.left, right: chip.right, bottom: chip.bottom }}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.16, duration: 0.55 }}
          >
            <span className="hero-chip">
              <i />
              {chip.label}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <motion.span
            className="kicker"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {COMPANY.concept}
          </motion.span>
          <motion.h1
            className="display"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
          >
            Energia inteligente.
            <br />
            Engenharia que transforma.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
          >
            {COMPANY.support}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.82 }}
          >
            <MagneticButton href="whatsapp" className="btn-gold">
              Solicitar orçamento
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#a-eos" className="btn-ghost">
              Conheça a EOS
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          className="hero-meta"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>16°40'S — 49°15'W</span>
          <span>Goiânia · GO</span>
          <span>REF. 01 / INSTALAÇÃO FOTOVOLTAICA</span>
        </motion.div>
      </div>
    </section>
  );
}
