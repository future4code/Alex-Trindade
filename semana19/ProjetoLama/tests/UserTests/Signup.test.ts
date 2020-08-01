import { UserInputDTO, User } from "./../../src/model/User";
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

  test("Should return 'Missing input' for empty email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashManager as any,
        authenticator as any,
        idGenerator as any
      );

      const user: UserInputDTO = {
        name: "Alex",
        email: "",
        password: "123456",
        role: "ADMIN",
      };

      await userBusiness.signup(user);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Missing input' for empty password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashManager as any,
        authenticator as any,
        idGenerator as any
      );

      const user: UserInputDTO = {
        name: "Alex",
        email: "alex@live.com",
        password: "",
        role: "ADMIN",
      };

      await userBusiness.signup(user);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Missing input' for empty role", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashManager as any,
        authenticator as any,
        idGenerator as any
      );

      const user: UserInputDTO = {
        name: "Alex",
        email: "alex@live.com",
        password: "123456",
        role: "",
      };

      await userBusiness.signup(user);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Invalid password' for invalid password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashManager as any,
        authenticator as any,
        idGenerator as any
      );

      const user: UserInputDTO = {
        name: "Alex",
        email: "alex@live.com",
        password: "12345",
        role: "ADMIN",
      };

      await userBusiness.signup(user);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Invalid password");
    }
  });

  test("Should return the accessToken in success", async () => {
    const generateId = jest.fn(() => "id");
    idGenerator = { generate: generateId };

    const hash = jest.fn(() => "hash");
    hashManager = { hash };

    const generateToken = jest.fn(() => "token");
    authenticator = { generate: generateToken };

    const createUser = jest.fn((user: User) => {});
    userDatabase = { createUser };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashManager as any,
      authenticator as any,
      idGenerator as any
    );

    const user: UserInputDTO = {
      name: "Alex",
      email: "alex@live.com",
      password: "123456",
      role: "ADMIN",
    };

    const result = await userBusiness.signup(user);

    expect(result).toBe("token");
    expect(hash).toHaveBeenCalledWith("123456");
    expect(generateId).toHaveBeenCalledTimes(1);
    expect(generateToken).toHaveBeenCalledWith({ id: "id", role: "ADMIN" });
    expect(createUser).toHaveBeenCalledWith(
      new User(
        "id",
        "Alex",
        "alex@live.com",
        "hash",
        User.stringToUserRole("ADMIN")
      )
    );
  });
});
