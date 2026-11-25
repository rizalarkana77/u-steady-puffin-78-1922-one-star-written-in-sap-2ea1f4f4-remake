// "One Star, Written in Sap" — remake entry writer (Node 22, stdlib only).
// Emits a single houseplant one-star review into $MAKEFUN_OUTPUT_DIR,
// then re-reads the file and checks it against the competition gate
// (UTF-8 text, 1-279 characters, never whitespace-only, one line).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. I'm a 40-year-old juniper that should be 30 feet tall. He wires my branches and leaves the wire on until it bites into my bark, cuts my roots every spring, and keeps me eight inches high in a gravel tray. He calls it meditation. I call it a hostage situation.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(targetDir, { recursive: true });
const targetFile = join(targetDir, "entry.txt");

writeFileSync(targetFile, review, "utf8");

// Read back and hold the bytes up against every gate rule we know about.
const onDisk = readFileSync(targetFile, "utf8");
const checks: Array<[string, boolean]> = [
  ["length within 1-279 chars", onDisk.length >= 1 && onDisk.length <= 279],
  ["not whitespace only", onDisk.trim().length > 0],
  ["single line, no line breaks", !/[\r\n]/.test(onDisk)],
  ["plain ASCII so chars equal bytes", Buffer.byteLength(onDisk, "utf8") === onDisk.length],
  ["no leading or trailing whitespace", onDisk === onDisk.trim()],
  ["opens with the one-star marker", onDisk.startsWith("One star")],
  ["file matches the review exactly", onDisk === review],
];
for (const [label, ok] of checks) {
  if (!ok) throw new Error(`gate check failed: ${label}`);
}
console.log(`OK ${onDisk.length} chars -> ${targetFile}`);
console.log(onDisk);
