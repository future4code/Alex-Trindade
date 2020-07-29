import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("testing getProfile", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("testing error message when an user is not found", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn((id: string) => {});

      userDatabase = { getUserById };

      const userBusiness: UserBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getProfile("id-aleatory");
    } catch (error) {
      expect(error.eCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  test("testing success to show user profile", async () => {
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

    const user = await userBusiness.getProfile("aleatory-id");

    expect(getUserById).toHaveBeenCalledWith("aleatory-id");
    expect(user).toEqual({
      id: "aleatory-id",
      name: "Alex",
      email: "alex@labenu.com",
      role: UserRole.ADMIN,
    });
  });
});
