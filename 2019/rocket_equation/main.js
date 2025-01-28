import { processInput, totalFuelRequirement } from "./fuelCalculator.js";

const main = () => {
  try {
    const masses = processInput(Deno.args);
    const totalFuel = totalFuelRequirement(masses);

    console.log(`Total Fuel Requirement: ${totalFuel}`);
  } catch (error) {
    console.error(error.message);
  }
};

main();
