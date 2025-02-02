const calculateFuel = (mass) => Math.floor(mass / 3) - 2;

const totalFuelRequirement = function (masses) {
  return masses.reduce((total, mass) => total + calculateFuel(mass), 0);
};

const processInput = function (args) {
  return args
    .map((arg) => {
      const mass = parseInt(arg, 10);
      return isNaN(mass) || mass < 0 ? null : mass;
    })
    .filter(Boolean);
};

const readMassesFromFile = function (filePath) {
  const data = Deno.readTextFileSync(filePath);
  return JSON.parse(data);
};

export {
  calculateFuel,
  totalFuelRequirement,
  processInput,
  readMassesFromFile,
};
