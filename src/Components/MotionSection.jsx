import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.25, 0.46, 0.45, 0.94];

function makeVariants({ y = 36, x = 0 }) {
  return {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.62, ease: easeOut },
    },
  };
}

const presetVariants = {
  up: makeVariants({ y: 40, x: 0 }),
  "up-subtle": makeVariants({ y: 24, x: 0 }),
  left: makeVariants({ y: 0, x: -32 }),
  right: makeVariants({ y: 0, x: 32 }),
};

/**
 * Scroll-triggered section reveal. Respects prefers-reduced-motion.
 */
function resolvePreset(preset, rtl) {
  if (!rtl) return preset;
  if (preset === "left") return "right";
  if (preset === "right") return "left";
  return preset;
}

export default function MotionSection({
  children,
  className = "",
  preset = "up",
  amount = 0.14,
  delay = 0,
  rtl = false,
}) {
  const reduceMotion = useReducedMotion();
  const key = resolvePreset(preset, rtl);
  const variants = presetVariants[key] ?? presetVariants.up;

  if (reduceMotion) {
    return (
      <div className={className} style={{ width: "100%" }}>
        {children}
      </div>
    );
  }

  const visible = {
    ...variants.visible,
    transition: {
      ...variants.visible.transition,
      delay,
    },
  };

  return (
    <motion.div
      className={className}
      style={{ width: "100%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: variants.hidden, visible }}
    >
      {children}
    </motion.div>
  );
}
