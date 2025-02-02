# Day 1: The Tyranny of the Rocket Equation 🚀

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars. ✨

---

## 📚 Table of Contents

1. [🧩 Puzzle Overview](#puzzle-overview)
2. [🚀 Initial Launch Check](#initial-launch-check)
3. [⚖️ Fuel Calculation (Part 1)](#fuel-calculation-part-1)
   - [💡 Examples (Part 1)](#examples-part-1)
4. [⚖️ Additional Fuel Calculation (Part 2)](#additional-fuel-calculation-part-2)
   - [💡 Examples (Part 2)](#examples-part-2)
5. [📊 Total Fuel Requirement](#total-fuel-requirement)
6. [❓ Task](#task)
7. [🔜 Next Steps](#next-steps)

---

## 🧩 Puzzle Overview

Collect stars by solving puzzles. Two puzzles will be made available each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck! 🎄

---

## 🚀 Initial Launch Check

The Elves quickly load you into a spacecraft and prepare to launch. At the first Go / No Go poll, every Elf is Go until the **Fuel Counter-Upper**. They haven't determined the amount of fuel required yet. ⛽️

---

## ⚖️ Fuel Calculation (Part 1)

To determine the fuel required for launching a module, follow these steps:

1. **Take the mass of the module.**
2. **Divide the mass by 3.**
3. **Round down to the nearest integer.**
4. **Subtract 2 from the result.**

### 💡 Examples (Part 1):

- **For a mass of 12**:

  - Calculation: \( \frac{12}{3} = 4 \)
  - Fuel Required: \( 4 - 2 = \textbf{2} \) ➖

- **For a mass of 14**:

  - Calculation: \( \frac{14}{3} = 4.67 \) (rounds down to 4)
  - Fuel Required: \( 4 - 2 = \textbf{2} \) ➖

- **For a mass of 1969**:

  - Calculation: \( \frac{1969}{3} = 656.33 \) (rounds down to 656)
  - Fuel Required: \( 656 - 2 = \textbf{654} \) 🛠️

- **For a mass of 100756**:

  - Calculation: \( \frac{100756}{3} = 33585.33 \) (rounds down to 33585)
  - Fuel Required: \( 33585 - 2 = \textbf{33583} \) 🛠️

---

## ⚖️ Additional Fuel Calculation (Part 2)

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. You forgot to include additional fuel for the fuel you just added.

To determine the total fuel required for launching a module, including the fuel for the fuel, follow these steps:

1. **Take the mass of the module.**
2. **Divide the mass by 3.**
3. **Round down to the nearest integer.**
4. **Subtract 2 from the result.**
5. **If the fuel amount calculated is positive, treat that amount as a new mass and repeat the steps until the fuel requirement is zero or negative.**

### 💡 Examples (Part 2):

- **For a mass of 14**:

  - Calculation: \( \frac{14}{3} = 4.67 \) (rounds down to 4)
  - Fuel Required: \( 4 - 2 = \textbf{2} \) ➖
  - Additional Fuel: \( 2 \) requires no further fuel.

- **For a mass of 1969**:

  - Calculation: \( \frac{1969}{3} = 656.33 \) (rounds down to 656)
  - Fuel Required: \( 656 - 2 = \textbf{654} \)
  - Additional Fuel:
    - \( 654 / 3 = 218 - 2 = 216 \)
    - \( 216 / 3 = 72 - 2 = 70 \)
    - \( 70 / 3 = 23.33 - 2 = 21 \)
    - \( 21 / 3 = 7 - 2 = 5 \)
    - \( 5 / 3 = 1.67 - 2 = 0 \)
  - Total Fuel Required: \( 654 + 216 + 70 + 21 + 5 = \textbf{966} \)

- **For a mass of 100756**:

  - Calculation: \( \frac{100756}{3} = 33585.33 \) (rounds down to 33585)
  - Fuel Required: \( 33585 - 2 = \textbf{33583} \)
  - Additional Fuel:
    - \( 33583 / 3 = 11194.33 - 2 = 11192 \)
    - \( 11192 / 3 = 3730.67 - 2 = 3728 \)
    - \( 3728 / 3 = 1242.67 - 2 = 1240 \)
    - \( 1240 / 3 = 413.33 - 2 = 411 \)
    - \( 411 / 3 = 137 - 2 = 135 \)
    - \( 135 / 3 = 45 - 2 = 43 \)
    - \( 43 / 3 = 14.33 - 2 = 12 \)
    - \( 12 / 3 = 4 - 2 = 2 \)
    - \( 2 / 3 = 0.67 - 2 = 0 \)
  - Total Fuel Required: \( 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = \textbf{50346} \)

---

## 📊 Total Fuel Requirement

To find the total fuel requirement:

1. Individually calculate the fuel needed for the mass of each module.
2. Add together all the calculated fuel values, including the additional fuel from Part Two.

---

## ❓ Task

**What is the sum of the fuel requirements for all of the modules on your spacecraft when taking into account the mass of the added fuel?**

---

## 🔜 Next Steps

- Implement the required calculations in your code.
- Test your calculations against the provided examples.
- Submit your result for the total fuel requirement.

---

### <div style="text-align: center;">Happy calculating! 🎉</div>
