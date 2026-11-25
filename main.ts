// One Star, Written in Sap — remake entry (Node 22, stdlib only).
// Writes the houseplant one-star review to $MAKEFUN_OUTPUT_DIR/entry.txt
// and verifies it against the competition gate before reporting success:
// UTF-8, 1-279 characters, never whitespace-only, exactly one line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. I'm a 40-year-old juniper that should be 30 feet tall. He wires my branches and leaves the wire on until it bites into my bark, cuts my roots every spring, and keeps me eight inches high in a gravel tray. He calls it meditation. I call it a hostage situation.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, REVIEW, "utf8");

// Read back what actually landed on disk — the gate judges the file,
// not the intention, so every rule runs against the saved bytes. The
// rule table keeps the contract in one place: add a rule by adding a
// row, and the failure message names the row that broke.
const saved = readFileSync(outputFile, "utf8");
const byteCount = Buffer.byteLength(saved, "utf8");

const GATE: Array<[string, (t: string) => boolean]> = [
  ["length within 1-279 characters", (t) => t.length >= 1 && t.length <= 279],
  ["not whitespace only", (t) => t.trim().length > 0],
  ["single line, no line breaks", (t) => !/[\r\n]/.test(t)],
  ["plain ASCII, chars equal bytes", (t) => byteCount === t.length],
  ["no leading or trailing whitespace", (t) => t === t.trim()],
  ["opens with the one-star marker", (t) => t.startsWith("One star")],
  ["saved bytes match the review", (t) => t === REVIEW],
];

for (const [label, passes] of GATE) {
  if (!passes(saved)) {
    throw new Error(`gate check failed: ${label}`);
  }
}

console.log(`OK ${saved.length} chars -> ${outputFile}`);
console.log(saved);
