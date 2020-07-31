import { User } from "./../model/User";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  async signup(user: UserInputDTO): Promise<string> {
    if (!user.name || !user.email || !user.password || !user.role) {
      throw new InvalidParameterError("Missing input");
    }

    if (user.email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (user.password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id: string = this.idGenerator.generate();
    const hashPassword: string = await this.hashManager.hash(user.password);

    await this.userDatabase.signup(
      new User(
        id,
        user.name,
        user.email,
        hashPassword,
        User.stringToUserRole(user.role)
      )
    );

    const accessToken = this.authenticator.generateToken({
      id,
      role: user.role,
    });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}
