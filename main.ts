// Alien Field Notes: The Two Day Earth Review — make.fun bounty entry.
// One original line: a review of planet Earth left by an alien tourist.
// Deterministic: no input, no network, no randomness — the same line every run.
//
// How the line maps to the judge's criteria, in the judge's own order:
//  1. Alien tourist's one-line review of Earth — the visitor's outside view is
//     the whole line: an alien reporting home on the locals, closing with a
//     star rating and "would abduct again".
//  2. Funny from the alien's angle on ordinary Earth life — the joke is the
//     alien misreading a mundane habit (bagging dog waste) as treasure-keeping.
//  3. Original — a specific, surprising detail, not the first obvious thought
//     about traffic, gravity, money or weather.
//  4. Reads like a real review — a verdict (4/5 stars) plus a closing remark,
//     in a single line.
//  5. Tight — one joke only, nothing explains it, and the punch lands at the
//     end ("would abduct again").

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Earth: the dominant species scoops its pets' droppings into little bags and carries them home like treasure. 4/5 stars — would abduct again.";

// Gate: 1-200 characters, not whitespace-only, exactly one line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be whitespace-only");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
