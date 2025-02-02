# Day 2: 1202 Program Alarm 🚀

On the way to your gravity assist around the Moon, your ship computer beeps angrily about a "1202 program alarm." On the radio, an Elf is already explaining how to handle the situation: "Don't worry, that's perfectly norma--" The ship computer bursts into flames. 🔥

You notify the Elves that the computer's magic smoke seems to have escaped. "That computer ran Intcode programs like the gravity assist program it was working on; surely there are enough spare parts up there to build a new Intcode computer!"

## 📚 Table of Contents

1. [🔍 Overview][##overview]
2. [💻 Intcode Program Basics](#intcode-program-basics)
3. [🔧 Opcodes Explained](#opcodes-explained)
   - [➕ Opcode 1: Addition](#opcode-1-addition)
   - [✖️ Opcode 2: Multiplication](#opcode-2-multiplication)
   - [⏹️ Opcode 99: Halt](#opcode-99-halt)
4. [⚙️ Example Programs](#example-programs)
5. [❓ Task](#task)
6. [🔜 Next Steps](#next-steps)

---

## 🔍 Overview

Your goal is to restore the gravity assist program to the "1202 program alarm" state it had just before the last computer caught fire. To do this, you need to modify the Intcode program by replacing specific positions with given values and then executing the program to find the result at position 0.

## 💻 Intcode Program Basics

An Intcode program is a list of integers separated by commas (e.g., 1,0,0,3,99). The program is executed by reading an opcode at a given position, which indicates the operation to perform.

## 🔧 Opcodes Explained

### ➕ Opcode 1: Addition

Description: Adds together values from two positions and stores the result in a third position.  
Format: 1, input1_position, input2_position, output_position  
Example: For the input 1,9,10,3, the values at positions 9 and 10 are added, and the result is stored at position 3.

### ✖️ Opcode 2: Multiplication

Description: Multiplies values from two positions and stores the result in a third position.  
Format: 2, input1_position, input2_position, output_position  
Example: For the input 2,3,11,0, the values at positions 3 and 11 are multiplied, and the result is stored at position 0.

### ⏹️ Opcode 99: Halt

Description: Ends the program execution.  
Format: 99

## ⚙️ Example Programs

Program: 1,0,0,0,99

Result: 2,0,0,0,99 (1 + 1 = 2)  
Program: 2,3,0,3,99

Result: 2,3,0,6,99 (3 \* 2 = 6)  
Program: 2,4,4,5,99,0

Result: 2,4,4,5,99,9801 (99 \* 99 = 9801)  
Program: 1,1,1,4,99,5,6,0,99

Result: 30,1,1,4,2,5,6,0,99

## ❓ Task

Restore the gravity assist program by replacing position 1 with the value 12 and position 2 with the value 2. After running the program, what value is left at position 0?

## 🔜 Next Steps

Modify the Intcode program as described in the task.  
Implement the program execution logic based on the opcodes.  
Run the program and retrieve the value at position 0.

<div style="text-align: center;">Good luck restoring the program! 🎉</div>
1. [🧩 Puzzle Overview](#puzzle-overview)
2. [🚀 Initial Launch Check](#initial-launch-check)
3. [⚖️ Fuel Calculation (Part 1)](#fuel-calculation-part-1)
   - [💡 Examples (Part 1)](#examples-part-1)
4. [⚖️ Additional Fuel Calculation (Part 2)](#additional-fuel-calculation-part-2)
   - [💡 Examples (Part 2)](#examples-part-2)
5. [📊 Total Fuel Requirement](#total-fuel-requirement)
6. [❓ Task](#task)
7. [🔜 Next Steps](#next-steps)
