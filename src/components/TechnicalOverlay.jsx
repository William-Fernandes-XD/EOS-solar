import { motion, useReducedMotion } from "motion/react";

export function TechnicalOverlay() {
  const reduce = useReducedMotion();
  const draw = reduce
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: 1, opacity: 0.7 };

  return (
    <div className="tech-overlay" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M3 8 H97"
          fill="none"
          stroke="rgba(245,243,238,0.28)"
          strokeWidth="0.12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M3 92 H97"
          fill="none"
          stroke="rgba(245,243,238,0.22)"
          strokeWidth="0.12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
        />
        <motion.path
          d="M8 3 V97"
          fill="none"
          stroke="rgba(245,243,238,0.16)"
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{ duration: 1.3, delay: 0.1, ease: "easeInOut" }}
        />
        <motion.path
          d="M8 18 H28"
          fill="none"
          stroke="#E4B423"
          strokeWidth="0.14"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeInOut" }}
        />
        <motion.path
          d="M72 78 H92"
          fill="none"
          stroke="#E4B423"
          strokeWidth="0.14"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeInOut" }}
        />
        <circle cx="8" cy="18" r="0.45" fill="#E4B423" />
        <circle cx="92" cy="78" r="0.45" fill="#E4B423" />
        <path d="M3 3 h2 v2" fill="none" stroke="rgba(245,243,238,0.5)" strokeWidth="0.18" />
        <path d="M97 3 h-2 v2" fill="none" stroke="rgba(245,243,238,0.5)" strokeWidth="0.18" />
        <path d="M3 97 h2 v-2" fill="none" stroke="rgba(245,243,238,0.5)" strokeWidth="0.18" />
        <path d="M97 97 h-2 v-2" fill="none" stroke="rgba(245,243,238,0.5)" strokeWidth="0.18" />
      </svg>
    </div>
  );
}
