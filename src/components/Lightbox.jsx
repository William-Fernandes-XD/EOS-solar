import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    if (index == null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="lightbox-bar">
            <div>
              <strong>{item.title}</strong>
              <p className="tech-label" style={{ marginTop: 6 }}>
                {item.kind}
              </p>
            </div>
            <button className="icon-btn" type="button" onClick={onClose} aria-label="Fechar galeria">
              <X size={22} />
            </button>
          </div>
          <div className="lightbox-stage">
            <img src={item.src} alt={item.alt} />
          </div>
          <div className="lightbox-nav">
            <button className="icon-btn" type="button" onClick={onPrev} aria-label="Imagem anterior">
              <ChevronLeft size={22} />
            </button>
            <span className="tech-label">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button className="icon-btn" type="button" onClick={onNext} aria-label="Próxima imagem">
              <ChevronRight size={22} />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
