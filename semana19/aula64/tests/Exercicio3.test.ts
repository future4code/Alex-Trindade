import { performAttackInverse } from "./../src/Exercicio3";
import { Character } from "./../src/Exercicio1";

describe("Testing performAttack", () => {
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Ryu",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    const defender: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 200,
      strength: 400,
    };

    performAttackInverse(attacker, defender, validatorMock as any);
    expect(defender.life).toEqual(900);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("testing return invalid character", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Ryu",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    const defender: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 200,
      strength: 400,
    };

    try {
      performAttackInverse(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid Character!");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

  test("Testing defense against attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Vega",
      life: 1500,
      defense: 300,
      strength: 600,
    };

    const defender: Character = {
      name: "M.Bison",
      life: 1500,
      defense: 700,
      strength: 1000,
    };

    performAttackInverse(attacker, defender, validatorMock as any);
    expect(defender.life).toEqual(1500);
  });
});
