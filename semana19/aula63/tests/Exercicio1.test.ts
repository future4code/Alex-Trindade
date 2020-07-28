import { performPurchase, User } from "../src/Exercicio1";

describe("Validate performPurchase", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Alex",
      balance: 5000,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({ ...user, balance: 4950 });
  });

  test("Testing balance equals the value", () => {
    const user: User = {
      name: "Cindy",
      balance: 200,
    };

    const result = performPurchase(user, 200);

    expect(result).toEqual({ ...user, balance: 0 });
  });

  test("Testing balance is less than the value", () => {
    const user: User = {
      name: "Maria",
      balance: 150,
    };

    const result = performPurchase(user, 200);

    expect(result).toEqual(undefined);
  });
});
