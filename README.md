# copper-ops-bundle-plane

`copper-ops-bundle-plane` explores automation with a small JavaScript codebase and local fixtures. The technical goal is to develop a JavaScript command-oriented project for bundle scenarios with layout fixtures, stable geometry snapshots, and bounded memory input sets.

## Why This Exists

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Copper Ops Bundle Plane Review Notes

For a quick review, compare `dry-run spread` with `operator cost` before reading the middle cases.

## Capabilities

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/copper-ops-bundle-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `operator cost`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Shape

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Local Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Verification

The same command runs the local verification path. The highest-scoring domain case is `baseline` at 209, which lands in `ship`. The most cautious case is `edge` at 158, which lands in `ship`.

## Roadmap

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
