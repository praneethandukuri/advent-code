import { calculateTotalFuel } from "./src/fuelCalculator.js";
import data from "./data/data_2.json" with { type: "json" };

const main = () => {
  const masses = data;
  const totalFuelPart1 = calculateTotalFuel(masses, false);
  console.log(`Total fuel requirement for Part 1: ${totalFuelPart1}`);

  const totalFuelPart2 = calculateTotalFuel(masses, true);
  console.log(`Total fuel requirement for Part 2: ${totalFuelPart2}`);
};

main();
