import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { COMPANY, TESTIMONIALS } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  return (
    <section id="avaliacoes" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Avaliações</p>
          <h2 className="display">Confiança escrita por quem contratou.</h2>
        </Reveal>
        <div className="reviews-top">
          <Reveal>
            <div className="rating-block">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <div className="score display">{COMPANY.rating}</div>
              <p className="muted" style={{ marginTop: "0.8rem" }}>
                {COMPANY.reviews} avaliações no Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.name}
                className="quote-main"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                “{current.text}”
                <footer>{current.name}</footer>
              </motion.blockquote>
            </AnimatePresence>
          </Reveal>
        </div>
        <div className="quote-rail">
          {TESTIMONIALS.filter((_, index) => index !== active).map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(TESTIMONIALS.findIndex((t) => t.name === item.name))}
            >
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
