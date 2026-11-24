// The Robot Vacuum's Best Excuse — make.fun entry runner.
//
// The bounty asks for one line: the funniest excuse a robot vacuum could
// offer for missing a spot, at most 140 characters. The line itself lives
// in the VACUUM_EXCUSE constant near the top of this file; everything else
// here is plumbing. The runner checks the line against the bounty gate,
// writes it to /output/entry.txt, and then reads that file back and
// compares it character for character, so a truncated or altered write
// can never slip through silently.
//
// How to run it (plain Node 22 or newer, zero dependencies, no network,
// no command-line arguments):
//   node main.ts
//   cat /output/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// The entry
// ---------------------------------------------------------------------------

// One line, 100 characters. The file the judge reads holds this line and
// nothing else — no trailing newline, no extra whitespace — because the
// gate counts characters, and every character in the file is judged.
const VACUUM_EXCUSE =
  "My lidar found the dust, my camera found the cat sitting on it, and my warranty does not cover cats.";

// ---------------------------------------------------------------------------
// The bounty gate
// ---------------------------------------------------------------------------

// /output/entry.txt must be UTF-8 text of 1-140 characters, exactly one
// line, and not only whitespace. These bounds come straight from the
// bounty description; the constants below exist so a future edit to the
// line fails loudly here instead of shipping a rejected entry.
const MIN_ENTRY_CHARS = 1;
const MAX_ENTRY_CHARS = 140;
const ENTRY_PATH = "/output/entry.txt";

// Everything the gate forbids, checked in the order a tired homeowner
// would notice it: wrong length first, then hidden whitespace, then a
// line break smuggled into the middle. The comparison against the raw
// constant is deliberate — trimming first and validating second would
// let a padded line pass here and fail on the judge's side.
function checkGate(raw: string): string {
  if (raw.length < MIN_ENTRY_CHARS || raw.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `excuse is ${raw.length} characters, gate allows ${MIN_ENTRY_CHARS}-${MAX_ENTRY_CHARS}`,
    );
  }
  if (raw.trim() !== raw) {
    throw new Error("excuse must not start or end with whitespace");
  }
  if (raw.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (/[\r\n]/.test(raw)) {
    throw new Error("excuse must be exactly one line, no line breaks");
  }
  return raw;
}

// ---------------------------------------------------------------------------
// Publish + verify
// ---------------------------------------------------------------------------

// Write the validated line, then prove the write: read the file back and
// demand an exact match, and demand there is no newline anywhere in it.
// If the disk disagrees with the constant above, the run dies here.
function publishEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, line, "utf8");
  const onDisk = readFileSync(ENTRY_PATH, "utf8");
  if (onDisk !== line) {
    throw new Error(
      `read-back mismatch: disk holds ${onDisk.length} characters, expected ${line.length}`,
    );
  }
  if (onDisk.includes("\n") || onDisk.includes("\r")) {
    throw new Error("entry file must not contain a newline");
  }
}

function main(): void {
  const line = checkGate(VACUUM_EXCUSE);
  publishEntry(line);
  console.log(`wrote ${ENTRY_PATH} (${line.length} characters, 1 line)`);
  console.log(line);
}

main();
