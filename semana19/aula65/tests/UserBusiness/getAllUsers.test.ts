import { UserRole, User, stringToUserRole } from "./../../src/model/User";
import { UserBusiness } from "../../src/business/UserBusiness";

describe("testing userBusiness.getAllUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("testing error message when the role is normal", async () => {
    expect.assertions(2);

    try {
      const getAllUsers = jest.fn();

      userDatabase = { getAllUsers };

      const userBusiness: UserBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (error) {
      expect(error.eCode).toBe(401);
      expect(error.message).toBe("Only admins can access this endpoint");
    }
  });

  test("should return all users", async () => {
    const getAllUsers = jest.fn(() => [
      new User(
        "aleatory-id",
        "Alex",
        "alex@labenu.com",
        "database",
        stringToUserRole("ADMIN")
      ),
    ]);

    userDatabase = { getAllUsers };

    const userBusiness: UserBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const users = await userBusiness.getAllUsers(UserRole.ADMIN);

    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(users).toContainEqual({
      id: "aleatory-id",
      name: "Alex",
      email: "alex@labenu.com",
      role: UserRole.ADMIN,
    });
  });
});
