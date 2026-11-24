// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt: a
// joke about office life. The calendar blocks "focus time" from 9 to
// 5, then fills it with six meetings about why nobody has time to
// focus.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My calendar blocked 'focus time' from 9 to 5, then filled it with six meetings about why nobody has time to focus.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
