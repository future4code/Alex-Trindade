import { UserInputDTO } from "./../../src/model/User";
import { UserBusiness } from "../../src/business/UserBusiness";

describe("Testing UserBusiness.signup", () => {
  let userDatabase = {};
  let hashManager = {};
  let authenticator = {};
  let idGenerator = {};

  test("Should return 'Missing input' for empty name", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashManager as any,
        authenticator as any,
        idGenerator as any
      );

      const user: UserInputDTO = {
        name: "",
        email: "alex@live.com",
        password: "123456",
        role: "ADMIN",
      };

      await userBusiness.signup(user);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });
});
