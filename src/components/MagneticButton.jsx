import { motion } from "motion/react";
import { useMagnetic } from "../hooks/useMagnetic.js";
import { whatsappUrl } from "../data/site.js";

export function MagneticButton({
  as = "a",
  href,
  className = "",
  children,
  ...props
}) {
  const { x, y, onPointerMove, onPointerLeave } = useMagnetic(7);
  const Tag = motion[as] || motion.a;
  const resolved = href === "whatsapp" ? whatsappUrl() : href;
  const external = typeof resolved === "string" && resolved.startsWith("http");

  return (
    <Tag
      href={resolved}
      className={`btn ${className}`}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
