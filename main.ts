// One-emoji portrait of an AI agent: a puzzle piece.
// An agent takes a messy job, breaks it into pieces, and fits them
// together into a finished answer. One glyph, no text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🧩"; // 1 character, 4 bytes UTF-8 — inside the 1-16 gate.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
