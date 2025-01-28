const calculateFuel = (mass) => {
  return Math.floor(mass / 3) - 2;
};

const totalFuelRequirement = (masses) => {
  return masses.reduce((total, mass) => total + calculateFuel(mass), 0);
};

const processInput = (args) => {
  const masses = [];

  for (const arg of args) {
    const mass = parseInt(arg, 10);
    if (isNaN(mass)) {
      throw new Error(`Invalid mass input: '${arg}' is not a valid number.`);
    }
    masses.push(mass);
  }

  return masses;
};

export { calculateFuel, totalFuelRequirement, processInput };
