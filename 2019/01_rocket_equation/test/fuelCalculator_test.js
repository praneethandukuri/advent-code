import { assertEquals } from "jsr:@std/assert";
import { calculateFuel, totalFuelRequirement } from "../src/fuelCalculator.js";
import { describe, it } from "jsr:@std/testing/bdd";

describe("calculateFuel", () => {
  it("calculates correct fuel for given mass values", () => {
    assertEquals(calculateFuel(12), 2);
    assertEquals(calculateFuel(14), 2);
    assertEquals(calculateFuel(1969), 654);
    assertEquals(calculateFuel(100756), 33583);
  });

  it("returns zero or negative for very small masses", () => {
    assertEquals(calculateFuel(2), -2);
    assertEquals(calculateFuel(1), -2);
    assertEquals(calculateFuel(0), -2);
  });
});

describe("totalFuelRequirement", () => {
  it("computes correct total fuel for list of masses", () => {
    const masses = [12, 14, 1969, 100756];
    assertEquals(totalFuelRequirement(masses), 34241);
  });

  it("returns 0 for an empty array", () => {
    assertEquals(totalFuelRequirement([]), 0);
  });

  it("handles negative fuel values correctly", () => {
    assertEquals(totalFuelRequirement([1, 2, 3]), -6);
  });
});
