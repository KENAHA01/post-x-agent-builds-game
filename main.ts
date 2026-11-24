// main.ts - entrypoint for the make.fun entry.
// It copies POST.json (the address of the entry's post on X) from the
// repository into the output directory. Standard library only, no network.
// The file is parsed first so a broken POST.json fails loudly instead of
// silently shipping a bad entry.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
if (!existsSync(src)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}
const raw = readFileSync(src, "utf8");
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  console.error("POST.json must be an object with a string 'url'");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
console.log(`POST.json copied to ${join(outDir, "POST.json")}`);
