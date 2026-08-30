import { useMotionValue, useSpring } from "motion/react";
import { useFinePointer, usePrefersReducedMotion } from "./useMediaQuery.js";

export function useMagnetic(max = 7) {
  const fine = useFinePointer();
  const reduce = usePrefersReducedMotion();
  const enabled = fine && !reduce;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 280, damping: 22, mass: 0.35 });
  const y = useSpring(my, { stiffness: 280, damping: 22, mass: 0.35 });

  function onPointerMove(event) {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    mx.set(Math.max(-max, Math.min(max, dx * 0.18)));
    my.set(Math.max(-max, Math.min(max, dy * 0.18)));
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return { x, y, onPointerMove, onPointerLeave, enabled };
}
