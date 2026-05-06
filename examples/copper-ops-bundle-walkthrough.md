# Copper Ops Bundle Plane Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 209 | ship |
| stress | rename risk | 204 | ship |
| edge | operator cost | 158 | ship |
| recovery | idempotence | 164 | ship |
| stale | dry-run spread | 200 | ship |

Start with `baseline` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`baseline` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
