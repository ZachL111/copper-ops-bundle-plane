import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 63, slack: 42, drag: 11, confidence: 74 };
assert.equal(domainReviewScore(item), 209);
assert.equal(domainReviewLane(item), "ship");
