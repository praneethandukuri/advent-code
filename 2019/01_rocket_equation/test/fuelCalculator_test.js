import {
  calculateFuelPart1,
  calculateFuelPart2,
} from "../src/fuelCalculator.js";
import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";

describe("Fuel Calculator", () => {
  describe("Part 1: Fuel Calculation", () => {
    it("calculates fuel for mass 12", () => {
      assertEquals(calculateFuelPart1(12), 2);
    });

    it("calculates fuel for mass 14", () => {
      assertEquals(calculateFuelPart1(14), 2);
    });

    it("calculates fuel for mass 1969", () => {
      assertEquals(calculateFuelPart1(1969), 654);
    });

    it("calculates fuel for mass 100756", () => {
      assertEquals(calculateFuelPart1(100756), 33583);
    });

    it("calculates fuel for mass 0", () => {
      assertEquals(calculateFuelPart1(0), -2);
    });

    it("handles negative mass gracefully", () => {
      assertEquals(calculateFuelPart1(-1), -3);
    });

    it("handles mass of 3", () => {
      assertEquals(calculateFuelPart1(3), 0);
    });

    it("calculates fuel for large mass", () => {
      assertEquals(calculateFuelPart1(123456), 41151);
    });
  });

  describe("Part 2: Additional Fuel Calculation", () => {
    it("calculates total fuel for mass 14", () => {
      assertEquals(calculateFuelPart2(14), 2);
    });

    it("calculates total fuel for mass 1969", () => {
      assertEquals(calculateFuelPart2(1969), 966);
    });

    it("calculates total fuel for mass 100756", () => {
      assertEquals(calculateFuelPart2(100756), 50346);
    });

    it("handles mass that requires no additional fuel", () => {
      assertEquals(calculateFuelPart2(2), 0);
    });

    it("calculates total fuel for mass 3", () => {
      assertEquals(calculateFuelPart2(3), 0);
    });

    it("calculates total fuel for mass 8", () => {
      assertEquals(calculateFuelPart2(8), 0);
    });

    it("handles mass of 0", () => {
      assertEquals(calculateFuelPart2(0), 0);
    });

    it("handles negative mass gracefully", () => {
      assertEquals(calculateFuelPart2(-1), 0);
    });

    it("calculates total fuel for large mass", () => {
      assertEquals(calculateFuelPart2(123456), 41151);
    });
  });
});
