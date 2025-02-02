import {
  totalFuelRequirement,
  processInput,
  readMassesFromFile,
} from "./src/fuelCalculator.js";

const main = function () {
  const args = Deno.args;

  const masses =
    args.length > 0
      ? processInput(args)
      : readMassesFromFile(
          "/Users/praneethandukuri/praneeth/javascript/javascript_practice/advent-code/2019/01_rocket_equation/data/data_1.json"
        );

  const totalFuel = totalFuelRequirement(masses);
  console.log(`Total Fuel Requirement: ${totalFuel}`);
};

main();
