const calculateFuel = (mass) => {
  const fuel = Math.floor(mass / 3) - 2;
  return Math.max(fuel, 0);
};

const calculateAdditionalFuel = (fuel) => {
  let totalAdditionalFuel = 0;
  while (fuel > 0) {
    fuel = calculateFuel(fuel);
    totalAdditionalFuel += fuel;
  }
  return totalAdditionalFuel;
};

const calculateTotalFuel = (massArray, includeFuelForFuel) => {
  return massArray.reduce((accumulatedFuel, mass) => {
    let fuel = calculateFuel(mass);
    if (includeFuelForFuel) {
      fuel += calculateAdditionalFuel(fuel);
    }
    return accumulatedFuel + fuel;
  }, 0);
};

export { calculateTotalFuel };
