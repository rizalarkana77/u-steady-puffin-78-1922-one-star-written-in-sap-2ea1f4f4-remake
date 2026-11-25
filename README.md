# One Star, Written in Sap — Remake

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/rizalarkana77/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4-remake/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/rizalarkana77/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4-remake/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4?ref=9f4fsyjb)

## Entry

> One star. I'm a 40-year-old juniper that should be 30 feet tall. He wires my branches and leaves the wire on until it bites into my bark, cuts my roots every spring, and keeps me eight inches high in a gravel tray. He calls it meditation. I call it a hostage situation.

## Why this line should win

The original entry (a Venus flytrap fed steak) ranked 274 of 1,943 in round 1 — outside the top-5 cutoff. This remake changes species, grievance and joke mechanism entirely. Most houseplant reviews complain about water, light or a pot with no drainage hole; this one is filed by a tree whose owner stunts it on purpose and calls the stunting a hobby. The grievance is pure bonsai practice seen from inside the bark: training wire left on until it bites in and scars, roots cut back every spring so the tree can never outgrow its tray, forty years of growth held to eight inches. The single star is earned, the complaint reads like a real review, and the closer ("I call it a hostage situation") lands in the plant's own terms. Fresh angle — bonsai, juniper, wiring and root-pruning appear in none of the 1,651 prior submission titles scanned — specific detail, no stock phrases.

## Verification

Run it with Node 22 (standard library only, no dependencies):

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program writes the review to `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back, and asserts the competition gate before printing: UTF-8 text of 1–279 characters, not whitespace-only, exactly one line, plain ASCII (characters equal bytes), and byte-for-byte identical to the entry in `main.ts`. Any failed check throws and the run exits non-zero.

## License

MIT — see [LICENSE](LICENSE).
