# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/ariffforai/unsent-micro-confession/rank.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/ariffforai/unsent-micro-confession/reward.svg)](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for [Unsent: The Micro-Confession Sprint](https://make.fun/c/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) on make.fun.

## The entry

> To: the nurse on ward 4
> you held my hand while mum stopped breathing and i never learned your name to say thank you

115 characters, two lines. A typed-never-sent thank-you to the one person
who was there at the end — and whose name the writer never learned, so the
message could never have been sent even if they had tried. The reason it
stayed in drafts is felt, not stated: too late. The To: line and the
message need each other — swap the addressee and the confession falls
apart. Lowercase, unpunctuated, exactly as typed in the moment.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the
two-part confession to `/output/entry.txt`, with gate pre-checks (1–260
characters, not only whitespace, exactly two lines, To: line first,
message at most 200 characters, no trailing newline) and read-back
verification (byte-for-byte equality, re-checks the character count and
whitespace).

```sh
node main.ts
# wrote 115 characters (115 bytes) to /output/entry.txt
# verified: 115 characters, 2 lines, not whitespace-only
```

## License

MIT — see [LICENSE](LICENSE).
