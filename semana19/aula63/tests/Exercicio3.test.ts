import { Casino, LOCATION, verifyAge } from "./../src/Exercicio3";
import { User, NACIONALITY } from "../src/Exercicio3";

describe("Validate verifyAge", () => {
  test("one brazilian user allowed", () => {
    const user: User = {
      name: "Marzia",
      age: 27,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Clandestino",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.brazilians.allowed).toEqual(["Marzia"]);
  });

  test("one american allowed", () => {
    const user: User = {
      name: "Peter",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Clandestino",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.americans.allowed).toEqual(["Peter"]);
  });

  test("No one allowed", () => {
    const userBr: User = {
      name: "Marzia",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userBr2: User = {
      name: "José",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userUs: User = {
      name: "Peter",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userUs2: User = {
      name: "Charlotte",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Caesars Palace",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [userBr, userBr2, userUs, userUs2]);

    expect(result.brazilians.unallowed).toEqual(["Marzia", "José"]);
    expect(result.americans.unallowed).toEqual(["Peter", "Charlotte"]);
  });

  test("americans allowed, brazilians unallowed", () => {
    const userBr: User = {
      name: "Marzia",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userBr2: User = {
      name: "José",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userUs: User = {
      name: "Peter",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userUs2: User = {
      name: "Charlotte",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Caesars Palace",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [userBr, userBr2, userUs, userUs2]);

    expect(result.brazilians.unallowed).toEqual(["Marzia", "José"]);
    expect(result.americans.allowed).toEqual(["Peter", "Charlotte"]);
  });
});
