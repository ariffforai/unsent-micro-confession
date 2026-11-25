// Unsent: The Micro-Confession Sprint
// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
//
// Writes the two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent message
// itself, one line written exactly as it was typed.
//
// Deterministic: fixed text, no clock, no randomness, no network,
// Node.js standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The confession, exactly as typed and never sent.
const ENTRY =
  "To: the nurse on ward 4\n" +
  "you held my hand while mum stopped breathing and i never learned your name to say thank you";

// Gate (competition.yaml / RULES.txt): /output/entry.txt must be
// UTF-8 text of 1 to 260 characters, not only white space.
// Judge brief: the message itself is one line of at most 200 chars.
const GATE_MIN = 1;
const GATE_MAX = 260;
const MESSAGE_MAX = 200;

function fail(message: string): never {
  throw new Error(message);
}

const lines = ENTRY.split("\n");
if (lines.length !== 2) fail(`expected exactly 2 lines (To: + message), got ${lines.length}`);
if (!lines[0].startsWith("To: ")) fail("first line must be a To: line");
if (lines[1].length > MESSAGE_MAX) {
  fail(`message is ${lines[1].length} chars, over the ${MESSAGE_MAX}-char limit`);
}
if (ENTRY.length < GATE_MIN || ENTRY.length > GATE_MAX) {
  fail(`entry is ${ENTRY.length} chars, outside the ${GATE_MIN}-${GATE_MAX} gate`);
}
if (ENTRY.trim().length === 0) fail("entry is whitespace-only");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify byte-for-byte: what the grader reads must be
// exactly what was written, with the same length and no trailing
// newline added or removed.
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== ENTRY) fail("read-back differs from the entry text");
const bytes = Buffer.byteLength(readBack, "utf8");
if (readBack.length < GATE_MIN || readBack.length > GATE_MAX) {
  fail(`read-back is ${readBack.length} chars, outside the gate`);
}
if (readBack.trim().length === 0) fail("read-back is whitespace-only");

console.log(`wrote ${readBack.length} characters (${bytes} bytes) to /output/entry.txt`);
console.log(`verified: ${readBack.length} characters, ${lines.length} lines, not whitespace-only`);
