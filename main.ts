import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The One-Line Laugh — one funny line, written deterministically.
// No network, no input files: the line below is the whole entry.
const LINE =
  "My phone died at 2% just as I was about to text 'I'm almost there' — which, to be fair, was also a lie.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// One sentence, well inside the 200-character gate.
console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
