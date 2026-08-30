import { Expand } from "lucide-react";

export function Gallery({ items, onOpen }) {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <button
          key={item.src}
          type="button"
          className={`gallery-item span-${item.span}`}
          onClick={() => onOpen(index)}
        >
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span className="overlay" />
          <span className="meta">
            <span>
              <span className="tech-label">{item.kind}</span>
              <h3>{item.title}</h3>
            </span>
            <Expand size={16} aria-hidden="true" />
          </span>
        </button>
      ))}
    </div>
  );
}
