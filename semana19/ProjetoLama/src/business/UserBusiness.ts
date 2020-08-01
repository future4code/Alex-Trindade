import { User } from "./../model/User";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  async signup(user: UserInputDTO): Promise<string> {
    if (!user) {
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

  async getUserByEmail(input: LoginInputDTO): Promise<string> {
    if (!input.email || !input.password) {
      throw new InvalidParameterError("Missing input");
    }

    const user = await this.userDatabase.getUserByEmail(input.email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const hashCompare = await this.hashManager.compare(
      input.password,
      user.getPassword()
    );

    if (!hashCompare) {
      throw new InvalidParameterError("Invalid password");
    }

    const accessToken = this.authenticator.generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    return accessToken;
  }
}
