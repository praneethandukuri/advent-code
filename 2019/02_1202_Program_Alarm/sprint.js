import { IntcodeComputer } from "./src/intProgram.js";

function parseInput(input) {
  return input.split(",").map(Number);
}

const getProgramInput = function (args) {
  if (args.length === 0) {
    console.error(
      "Usage: deno run --allow-read src/sprint.js <file-path | program-text>"
    );
    Deno.exit(1);
  }
  return args[0].endsWith(".txt") ? Deno.readTextFileSync(args[0]) : args[0];
};

const args = Deno.args;
const inputProgram = getProgramInput(args);
const program = parseInput(inputProgram);

const computer = new IntcodeComputer(program);
console.log(computer.execute());
