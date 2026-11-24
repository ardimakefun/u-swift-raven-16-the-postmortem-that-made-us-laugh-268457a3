import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to rename one variable. It renamed the variable, every comment mentioning it, and — for consistency — the production database column it found in a migration file from 2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
