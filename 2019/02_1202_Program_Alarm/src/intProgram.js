export class IntcodeComputer {
  #memory;
  #pointer = 0;

  constructor(program) {
    this.#memory = [...program];
  }

  get program() {
    return this.#memory;
  }

  execute() {
    while (this.#memory[this.#pointer] !== 99) {
      const [opcode, param1, param2, target] = this.#memory.slice(
        this.#pointer,
        this.#pointer + 4
      );
      this.#performOperation(opcode, param1, param2, target);
      this.#pointer += 4;
    }
    return this.#memory[0];
    output;
  }

  #performOperation(opcode, param1, param2, target) {
    const [val1, val2] = [this.#memory[param1], this.#memory[param2]];
    this.#memory[target] = opcode === 1 ? val1 + val2 : val1 * val2;
  }
}
