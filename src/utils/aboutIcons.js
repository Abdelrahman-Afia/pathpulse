/**
 * Resolves icons from src/Assets by matching filenames to card names
 * (e.g. "The Problem.png", "Student-First.png", "Afia.png").
 */
function stripKey(s) {
  return String(s)
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "");
}

const ctx = require.context("../Assets", false, /\.(png|jpe?g|svg|webp)$/i);

export function resolveAboutIcon(...nameCandidates) {
  const keys = ctx.keys();
  for (const raw of nameCandidates) {
    const want = stripKey(raw);
    if (!want) continue;
    const hit = keys.find((k) => {
      const base = stripKey(k.replace(/^\.\//, ""));
      return base === want || base.includes(want) || want.includes(base);
    });
    if (hit) return ctx(hit);
  }
  return null;
}
