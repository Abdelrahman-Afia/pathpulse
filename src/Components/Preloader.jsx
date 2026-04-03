import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import unionLogo from "../Assets/Union.png";
import "./Preloader.css";

const MIN_VISIBLE_MS = 1000;
const MIN_VISIBLE_REDUCED_MS = 450;
const FADE_OUT_S = 0.48;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? MIN_VISIBLE_REDUCED_MS : MIN_VISIBLE_MS;
    const started = performance.now();

    const reveal = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      reveal();
      return undefined;
    }

    window.addEventListener("load", reveal, { once: true });
    return () => window.removeEventListener("load", reveal);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_S, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="preloader-inner">
            <img
              src={unionLogo}
              alt=""
              className="preloader-logo"
              width={200}
              height={200}
              decoding="async"
              fetchPriority="high"
            />
            <div className="preloader-bar" aria-hidden />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
