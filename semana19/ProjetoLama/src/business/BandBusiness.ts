import { BandDatabase } from "../data/BandDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { User, UserRole } from "../model/User";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { BandDTO, Band } from "../model/Band";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { NotFoundError } from "../error/NotFoundError";

export class BandBusiness {
  registerBand(authorization: string, input: any) {
    throw new Error("Method not implemented.");
  }
  viewBandDetails(authorization: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
  constructor(
    private bandDatabase: BandDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async createBand(token: string, input: BandDTO) {
    const user = this.authenticator.getData(token);

    if (User.stringToUserRole(user.role) !== UserRole.ADMIN) {
      throw new UnauthorizedError("Only admins can access this endpoint");
    }

    if (!input) {
      throw new InvalidParameterError("Missing input");
    }

    const id = this.idGenerator.generate();

    await this.bandDatabase.createBand(
      new Band(id, input.name, input.genre, input.responsible)
    );
  }

  public async getBandDetails(token: string, parameter: string) {
    this.authenticator.getData(token);
    const band = await this.bandDatabase.getBandDetails(parameter);

    if (!band) {
      throw new NotFoundError("Band not found");
    }

    return band;
  }
}
