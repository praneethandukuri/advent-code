# TODO List for Fuel Calculator Project

## 1. Create `fuelCalculator.js`

- Implement the following functions:
  - `calculateFuel(mass)`: Calculate fuel required for a given mass.
  - `totalFuelRequirement(masses)`: Calculate total fuel requirement for an array of masses.
  - `processInput(args)`: Process command-line arguments and return an array of valid masses.

## 2. Create `main.js`

- Import functions from `fuelCalculator.js`.
- Implement a `main` function that:
  - Reads command-line arguments.
  - Passes arguments to `processInput`.
  - Calls `totalFuelRequirement` with processed masses (ensure no output or calculations happen in this function).

## 3. Create `fuelCalculator_test.js`

- Use Deno's testing framework to implement tests:
  - Write tests for `calculateFuel` to check various mass inputs.
  - Write tests for `totalFuelRequirement` to validate total fuel calculations.
  - Write tests for `processInput` to ensure valid and invalid inputs are handled correctly.

## 4. Run Tests

- Execute tests using the Deno testing command:
  ```bash
  deno test --allow-read fuelCalculator_test.js
  ```

## 5. Documentation

- Comment the code thoroughly to explain the purpose of each function and logic.
- Create a README file with instructions on how to run the project, including how to execute the main script and run tests.

## 6. Error Handling

- Ensure proper error messages are displayed for invalid inputs in the command line.
- Consider edge cases, such as no input provided or negative mass values.

## 7. Refactor

- Review the code for any improvements in readability or efficiency.
- Ensure adherence to coding standards and best practices.

## 8. Optional Enhancements (if needed)

- Allow for reading input from a file instead of command-line arguments.
- Add support for calculating additional parameters, like total weight of the spacecraft based on fuel requirements.
