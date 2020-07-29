import { validateCharacter, Character } from "./../src/Exercicio1";

describe("Testing validateCharacter", () => {
  test("testing false for empty name", () => {
    const character: Character = {
      name: "",
      life: 1500,
      defense: 500,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });

  test("testing false for empty life", () => {
    const character: Character = {
      name: "Pernalonga",
      life: undefined,
      defense: 500,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });

  test("testing false for empty strength", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: 200,
      strength: undefined,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });

  test("testing false for empty defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: undefined,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });

  test("testing false for negative defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: -5,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });

  test("testing true for zero defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: 0,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(true);
  });

  test("testing true for all valid informations", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: 200,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(true);
  });
});
