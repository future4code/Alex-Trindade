import { User, stringToUserRole, UserRole } from "./../../src/model/User";
import { UserBusiness } from "./../../src/business/UserBusiness";

describe("testing userBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("testing user not found when user doesn't exist", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();

      userDatabase = { getUserById };

      const userBusiness: UserBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("id-aleatory");
    } catch (error) {
      expect(error.eCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  test("testing success to find an user", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "aleatory-id",
          "Alex",
          "alex@labenu.com",
          "database",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("aleatory-id");

    expect(getUserById).toHaveBeenCalledWith("aleatory-id");
    expect(user).toEqual({
      id: "aleatory-id",
      name: "Alex",
      email: "alex@labenu.com",
      role: UserRole.ADMIN,
    });
  });
});
