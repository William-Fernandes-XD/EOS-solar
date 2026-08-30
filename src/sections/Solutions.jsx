import { useState } from "react";
import { SOLUTIONS } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";
import { useFinePointer } from "../hooks/useMediaQuery.js";

export function Solutions() {
  const [active, setActive] = useState(0);
  const fine = useFinePointer();

  return (
    <section id="solucoes" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Soluções</p>
          <h2 className="display">Soluções pensadas para durar.</h2>
        </Reveal>
        <div className="solutions-layout">
          <div>
            {SOLUTIONS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`solution-row ${active === index ? "is-active" : ""}`}
                onMouseEnter={() => fine && setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="num">{item.index}</span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="sol-indicator" />
                </span>
              </button>
            ))}
          </div>
          <div className="sol-visual" aria-hidden={!fine}>
            {SOLUTIONS.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt=""
                className={active === index ? "is-on" : ""}
                loading="lazy"
              />
            ))}
            <span className="sol-caption">{SOLUTIONS[active].title}</span>
          </div>
        </div>
        <div className="sol-mobile-card" style={{ marginTop: "1.5rem" }}>
          <img
            src={SOLUTIONS[active].image}
            alt={SOLUTIONS[active].alt}
            loading="lazy"
            style={{ width: "100%", height: 280, objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
