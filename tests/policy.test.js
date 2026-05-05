import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 92,
    "capacity": 72,
    "latency": 20,
    "risk": 5,
    "weight": 6,
    "score": 222,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 66,
    "capacity": 93,
    "latency": 14,
    "risk": 22,
    "weight": 10,
    "score": 125,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 67,
    "capacity": 88,
    "latency": 16,
    "risk": 22,
    "weight": 11,
    "score": 124,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
