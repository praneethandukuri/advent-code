# TODO List for 1202 Program Alarm Project

## 1. Create `intcode.js` 🛠️

- Implement the following functions:
  - `runIntcodeProgram(program)`: Execute the Intcode program and return the value at position 0.
  - `modifyProgram(program, position1, value1, position2, value2)`: Replace values at specified positions in the program.

## 2. Create `main.js` 🚀

- Import functions from `intcode.js`.
- Implement a `main` function that:
  - Defines the initial Intcode program as an array.
  - Calls `modifyProgram` to set positions 1 and 2 to 12 and 2, respectively.
  - Calls `runIntcodeProgram` and logs the result at position 0.

## 3. Create `intcode_test.js` 🧪

- Use Deno's testing framework to implement tests:
  - Write tests for `runIntcodeProgram` to check various program inputs.
  - Write tests for `modifyProgram` to ensure values are correctly replaced in the program.

## 4. Run Tests 🏃‍♂️

- Execute tests using the Deno testing command:
  ```bash
  deno test --allow-read intcode_test.js
  ```

## 5. Documentation 📚

- **Comment the Code Thoroughly**:

  - Ensure that each function includes comments explaining its purpose, parameters, return values, and any important logic. This will help others (and your future self) understand the code more easily.
  - Use clear and concise comments that provide insight into the decision-making process behind the implementation.

- **Create a README File**:
  - Draft a README.md file that includes:
    - **Project Title**: Clearly state the name of the project.
    - **Description**: Provide a brief overview of what the project does.
    - **Installation Instructions**: Specify any prerequisites and how to install the project.
    - **Usage Instructions**:
      - Include examples of how to run the main script, such as:
        ```bash
        deno run --allow-read main.js
        ```
      - Explain how to execute tests, e.g.:
        ```bash
        deno test --allow-read intcode_test.js
        ```
    - **Contributing**: Outline how others can contribute to the project.
    - **License**: Include licensing information if applicable.

## 6. Error Handling ⚠️

- **Display Proper Error Messages**:

  - Implement error handling mechanisms that provide informative messages when the user inputs invalid data or when unexpected opcode values are encountered during program execution.
  - Use try-catch blocks where necessary to handle exceptions gracefully and provide feedback to the user.

- **Consider Edge Cases**:
  - Anticipate scenarios that could lead to errors, such as:
    - Programs that may not terminate (infinite loops).
    - Invalid positions that exceed the program's length.
    - Unrecognized opcodes or incorrect input formats.
  - Add checks to validate input values and provide appropriate warnings or errors before executing the program.

## 7. Refactor ✨

- **Review the Code**:
  - Go through the entire codebase to identify areas where improvements can be made. This may include simplifying complex functions, improving variable names for clarity, and removing redundant code.
- **Enhance Readability and Efficiency**:

  - Break down large functions into smaller, reusable ones where applicable. This will improve readability and make it easier to test individual components.
  - Optimize algorithms or data structures to enhance performance, especially in the execution logic of the Intcode program.

- **Adhere to Coding Standards**:
  - Follow consistent naming conventions, indentation, and code organization practices throughout the project.
  - Use tools like linters to enforce coding standards and identify potential issues in the code.
