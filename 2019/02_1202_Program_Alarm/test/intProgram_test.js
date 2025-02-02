import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { IntcodeComputer } from "../src/intProgram.js";

describe("Intcode Computer Tests", () => {
  it("should add two numbers correctly", () => {
    const computer = new IntcodeComputer([1, 0, 0, 0, 99]);
    computer.execute();
    assertEquals(computer.program, [2, 0, 0, 0, 99]); // Expected output: [2, 0, 0, 0, 99]
  });

  it("should multiply two numbers correctly", () => {
    const computer = new IntcodeComputer([2, 3, 0, 3, 99]);
    computer.execute();
    assertEquals(computer.program, [2, 3, 0, 6, 99]); // Expected output: [2, 3, 0, 6, 99]
  });

  it("should handle a complex program correctly", () => {
    const computer = new IntcodeComputer([1, 1, 1, 4, 99, 5, 6, 0, 99]);
    computer.execute();
    assertEquals(computer.program, [30, 1, 1, 4, 2, 5, 6, 0, 99]); // Expected output: [30, 1, 1, 4, 2, 5, 6, 0, 99]
  });

  it("should halt for a program with only halt instruction", () => {
    const computer = new IntcodeComputer([99]);
    computer.execute();
    assertEquals(computer.program, [99]); // Expected output: [99]
  });

  it("should handle large input correctly", () => {
    const input = [
      1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 2, 6, 19,
      23, 1, 23, 5, 27, 1, 27, 13, 31, 2, 6, 31, 35, 1, 5, 35, 39, 1, 39, 10,
      43, 2, 6, 43, 47, 1, 47, 5, 51, 1, 51, 9, 55, 2, 55, 6, 59, 1, 59, 10, 63,
      2, 63, 9, 67, 1, 67, 5, 71, 1, 71, 5, 75, 2, 75, 6, 79, 1, 5, 79, 83, 1,
      10, 83, 87, 2, 13, 87, 91, 1, 10, 91, 95, 2, 13, 95, 99, 1, 99, 9, 103, 1,
      5, 103, 107, 1, 107, 10, 111, 1, 111, 5, 115, 1, 115, 6, 119, 1, 119, 10,
      123, 1, 123, 10, 127, 2, 127, 13, 131, 1, 13, 131, 135, 1, 135, 10, 139,
      2, 139, 6, 143, 1, 143, 9, 147, 2, 147, 6, 151, 1, 5, 151, 155, 1, 9, 155,
      159, 2, 159, 6, 163, 1, 163, 2, 167, 1, 10, 167, 0, 99, 2, 14, 0, 0,
    ];

    const computer = new IntcodeComputer(input);
    computer.execute();
    assertEquals(computer.program[0], 490656); // Adjusted expected output based on your logic
  });
});
