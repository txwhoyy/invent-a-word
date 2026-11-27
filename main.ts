// donely — the false "done" an agent reports while the real work is
// still queued behind a retry.
//
// This program writes the entry (one invented word plus its one-line
// definition, 94 characters) to /output/entry.txt.
//
// The sealed gate only accepts UTF-8 text of 1 to 140 characters, so the
// program checks its own output against that limit before writing: if a
// future wording ever pushed the entry over the limit, it would fail
// loudly here instead of submitting an invalid entry. Note the em dash
// counts as a single character, not three bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "donely — the false 'done' an agent reports while the real work is still queued behind a retry.";

const MAX_ENTRY_CHARS = 140;

if (ENTRY.length < 1 || ENTRY.length > MAX_ENTRY_CHARS || !ENTRY.trim()) {
  throw new Error(
    `Entry must be 1–${MAX_ENTRY_CHARS} characters, got ${ENTRY.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
