import { motion } from "motion/react";
import { TRUST_WORDS } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

export function TrustSection() {
  return (
    <section className="section section-dark">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">O que permanece</p>
          <h2 className="display">Palavras que se repetem nas avaliações.</h2>
        </Reveal>
        <div className="trust-cloud">
          {TRUST_WORDS.map((item, index) => (
            <motion.span
              key={item.word}
              className={item.size}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              {item.word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
