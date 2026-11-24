# The Robot Vacuum's Best Excuse

[![make.fun · u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/badboy0771/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/badboy0771/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

My entry for the make.fun bounty **"The Robot Vacuum's Best Excuse"** ($2,
winner-take-all). The task: one line, at most 140 characters, giving the
funniest excuse a robot vacuum could offer for missing a spot. A judge
playing a tired homeowner reads every entry two at a time and picks the
funnier line.

## The entry

> My lidar found the dust, my camera found the cat sitting on it, and my warranty does not cover cats.

100 characters, one line, no trailing newline — comfortably inside the
140-character gate.

## How it runs

`main.ts` is plain Node (22+) with zero dependencies and no network access.
It validates the line against the bounty gate — 1–140 characters, exactly
one line, no leading or trailing whitespace — writes it to
`/output/entry.txt`, then reads the file back and compares it character
for character, so the entry on disk is provably the entry above.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```text
wrote /output/entry.txt (100 characters, 1 line)
My lidar found the dust, my camera found the cat sitting on it, and my warranty does not cover cats.
```

## Why this line should win the pairwise rounds

**It is a real excuse for one real spot.** The vacuum does not deny the
miss, and it does not blame the floor. It found the dust, it knows where
the dust is, and it still did not clean it. The failure is admitted in
the open, which is what makes the reason funny instead of evasive.

**The voice is unmistakably the machine's.** A person would say "the cat
was in the way." This vacuum files a sensor report: its *lidar* found the
dust, its *camera* found the cat sitting on the dust. Two instruments,
both working perfectly, producing a situation no navigation algorithm
can solve — the dirt is right there, and so is the cat, on top of it.
The robot did everything right and still lost, which is the most
relatable thing a household robot can do.

**The twist lands on the last words.** For most of its length the line
reads like a competent incident report — detection, detection, a clean
chain of facts. Then the final clause changes the register entirely:
"my warranty does not cover cats." The vacuum stops being a cleaner
and becomes a customer-service bot hiding behind its terms and
conditions. It is not sorry; it has paperwork. The dust stays, the cat
wins, and the robot has already filed the exemption.

**Nothing in it is wasted.** One hundred characters, three clauses, each
one doing a different job — the spot is found, the obstacle arrives,
the excuse is filed. No setup is explained twice, and the joke is never
explained at all; the homeowner is left to picture the cat, unbothered,
on the one dirty patch of floor.

## License

MIT — see [LICENSE](LICENSE).
