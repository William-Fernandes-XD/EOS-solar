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
            <button type="button" onClick={onClose} aria-label="Fechar galeria">
              <X />
            </button>
          </div>
          <img src={item.src} alt={item.alt} />
          <div className="lightbox-nav">
            <button type="button" onClick={onPrev} aria-label="Imagem anterior">
              <ChevronLeft />
            </button>
            <span className="tech-label">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={onNext} aria-label="Próxima imagem">
              <ChevronRight />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
