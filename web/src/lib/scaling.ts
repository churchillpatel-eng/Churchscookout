// ── Serving scaler ───────────────────────────────────────────────────
// Scales ingredient amounts by a ratio, preserving unicode fractions.

const UNICODE_FRACTIONS: Record<string, number> = {
  "½": 0.5,
  "¼": 0.25,
  "¾": 0.75,
  "⅓": 1 / 3,
  "⅔": 2 / 3,
  "⅛": 0.125,
  "⅜": 0.375,
  "⅝": 0.625,
  "⅞": 0.875,
};

const COMMON_FRACTIONS: [number, string][] = [
  [1 / 8, "⅛"],
  [1 / 4, "¼"],
  [1 / 3, "⅓"],
  [3 / 8, "⅜"],
  [1 / 2, "½"],
  [5 / 8, "⅝"],
  [2 / 3, "⅔"],
  [3 / 4, "¾"],
  [7 / 8, "⅞"],
];

/** Render a number back to a friendly string with unicode fractions. */
export function formatNumber(n: number): string {
  if (n === Math.round(n)) return String(Math.round(n));
  const whole = Math.floor(n);
  const frac = n - whole;
  for (const [val, sym] of COMMON_FRACTIONS) {
    if (Math.abs(frac - val) < 0.07) {
      return whole > 0 ? `${whole} ${sym}` : sym;
    }
  }
  return n.toFixed(1).replace(/\.0$/, "");
}

/**
 * Split an amount like "2.5 tbsp", "1 ½ cups", "¼", "1/2 tsp" into a numeric
 * quantity and a unit string. `qty` is null when there is no leading number
 * (e.g. a blank amount, or "to taste").
 */
export function parseAmount(amount: string | undefined): { qty: number | null; unit: string } {
  const str = String(amount ?? "").trim();
  if (!str) return { qty: null, unit: "" };

  // Whole number followed by a unicode fraction, e.g. "1 ½"
  let m = str.match(/^(\d+)\s*([½¼¾⅓⅔⅛⅜⅝⅞])\s*(.*)$/);
  if (m) return { qty: parseInt(m[1]) + (UNICODE_FRACTIONS[m[2]] ?? 0), unit: m[3].trim() };

  // Bare unicode fraction, e.g. "½"
  m = str.match(/^([½¼¾⅓⅔⅛⅜⅝⅞])\s*(.*)$/);
  if (m) return { qty: UNICODE_FRACTIONS[m[1]] ?? 0, unit: m[2].trim() };

  // Ascii fraction, e.g. "1/2"
  m = str.match(/^(\d+)\/(\d+)\s*(.*)$/);
  if (m) return { qty: parseInt(m[1]) / parseInt(m[2]), unit: m[3].trim() };

  // Whole or decimal, e.g. "16" or "2.5"
  m = str.match(/^(\d*\.?\d+)\s*(.*)$/);
  if (m) return { qty: parseFloat(m[1]), unit: m[2].trim() };

  return { qty: null, unit: str };
}

/** Scale a single amount string by `ratio`. Non-numeric amounts pass through. */
export function scaleAmount(amount: string | undefined, ratio: number): string {
  const str = String(amount ?? "");
  if (ratio === 1) return str;
  const { qty, unit } = parseAmount(str);
  if (qty === null) return str;
  const scaled = formatNumber(qty * ratio);
  return unit ? `${scaled} ${unit}` : scaled;
}
