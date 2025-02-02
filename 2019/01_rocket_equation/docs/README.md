# Day 1: The Tyranny of the Rocket Equation (Part 1) 🚀

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars. ✨

---

## 📚 Table of Contents

1. [🧩 Puzzle Overview](#puzzle-overview)
2. [🚀 Initial Launch Check](#initial-launch-check)
3. [⚖️ Fuel Calculation](#fuel-calculation)
   - [💡 Examples](#examples)
4. [📊 Total Fuel Requirement](#total-fuel-requirement)
5. [❓ Task](#task)
6. [🔜 Next Steps](#next-steps)

---

## 🧩 Puzzle Overview

Collect stars by solving puzzles. Two puzzles will be made available each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck! 🎄

---

## 🚀 Initial Launch Check

The Elves quickly load you into a spacecraft and prepare to launch. At the first Go / No Go poll, every Elf is Go until the **Fuel Counter-Upper**. They haven't determined the amount of fuel required yet. ⛽️

---

## ⚖️ Fuel Calculation

To determine the fuel required for launching a module, follow these steps:

1. **Take the mass of the module.**
2. **Divide the mass by 3.**
3. **Round down to the nearest integer.**
4. **Subtract 2 from the result.**

### 💡 Examples:

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

## 📊 Total Fuel Requirement

The **Fuel Counter-Upper** needs to know the total fuel requirement. To find it:

1. Individually calculate the fuel needed for the mass of each module (your puzzle input).
2. Add together all the calculated fuel values.

---

## ❓ Task

**What is the sum of the fuel requirements for all of the modules on your spacecraft?**

---

## 🔜 Next Steps

- Implement the required calculations in your code.
- Test your calculations against the provided examples.
- Submit your result for the total fuel requirement.

---

### <div style="text-align: center;">Happy calculating! 🎉</div>
