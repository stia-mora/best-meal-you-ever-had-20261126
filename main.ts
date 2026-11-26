// The Best Meal You Ever Had — entry program.
//
// Reads the sentence shipped beside this file (entry.txt), checks it
// against the competition gate (1-200 characters of UTF-8, not blank),
// and writes the exact bytes to entry.txt inside the output directory.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

// Gate self-check before anything is written: a sentence that fails
// here would score zero, so fail loudly instead of shipping it. The
// contest is a single sentence, so an embedded newline fails too,
// not just the character count.
const text = readFileSync(sourcePath, "utf8");
const charCount = [...text].length;
if (charCount < 1 || charCount > 200 || text.trim().length === 0) {
  throw new Error(`entry.txt breaks the gate: ${charCount} characters`);
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry.txt breaks the gate: more than one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const targetPath = join(outDir, "entry.txt");
copyFileSync(sourcePath, targetPath);
console.log(`wrote ${targetPath} (${charCount} characters)`);
