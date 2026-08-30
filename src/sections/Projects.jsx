import { useState } from "react";
import { PROJECTS } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { Lightbox } from "../components/Lightbox.jsx";

export function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projetos" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Projetos</p>
          <h2 className="display">Projetos que geram resultado.</h2>
        </Reveal>
        <Gallery items={PROJECTS} onOpen={setOpen} />
      </div>
      <Lightbox
        items={PROJECTS}
        index={open}
        onClose={() => setOpen(null)}
        onPrev={() =>
          setOpen((current) =>
            current == null ? current : (current + PROJECTS.length - 1) % PROJECTS.length
          )
        }
        onNext={() =>
          setOpen((current) =>
            current == null ? current : (current + 1) % PROJECTS.length
          )
        }
      />
    </section>
  );
}
