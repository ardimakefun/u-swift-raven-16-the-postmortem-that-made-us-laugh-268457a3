import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to rename one variable. It renamed the variable, every comment mentioning it, and — for consistency — the production database column it found in a migration file from 2019.";

// Length gate: entry must be 1–400 code points; refuse to write otherwise.
const ENTRY_LENGTH = [...ENTRY].length;
if (ENTRY_LENGTH < 1 || ENTRY_LENGTH > 400) {
  throw new Error(`Entry length ${ENTRY_LENGTH} code points is outside the allowed 1–400 range; refusing to write output.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
