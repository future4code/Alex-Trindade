import { InvalidParameterError } from "./../error/InvalidParameterError";
import { IdGenerator } from "./../services/IdGenerator";
import { Authenticator } from "./../services/Authenticator";
import { ShowDatabase } from "../data/ShowDatabase";
import { ShowDTO, Show } from "../model/Show";
{
}
export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}

  public async newShow(token: string, input: ShowDTO): Promise<void> {
    this.authenticator.getData(token);

    if (!input) {
      throw new InvalidParameterError("Missing input");
    }

    if (input.startTime >= input.endTime) {
      throw new InvalidParameterError("Start time must be before end time");
    }

    if (input.startTime % 1 !== 0 || input.endTime % 1 !== 0) {
      throw new InvalidParameterError(`It's have to be full time hour`);
    }

    if (
      input.startTime < 8 ||
      input.startTime > 22 ||
      input.endTime > 23 ||
      input.endTime < 9
    ) {
      throw new InvalidParameterError(`Times allowed: 8h to 23h`);
    }

    const newShow = await this.showDatabase.verifyShowTime(
      input.weekDay,
      input.startTime,
      input.endTime
    );

    if (newShow) {
      throw new Error("There's a show in this time");
    }

    const id = this.idGenerator.generate();

    await this.showDatabase.newShow(
      new Show(
        id,
        Show.stringToDays(input.weekDay),
        input.startTime,
        input.endTime,
        input.bandId
      )
    );
  }

  public async getAllShowsInADay(token: string, weekDay: string) {
    this.authenticator.getData(token);

    if (!weekDay) {
      throw new InvalidParameterError("Missing input");
    }

    const shows = await this.showDatabase.getAllShowsInADate(
      Show.stringToDays(weekDay)
    );

    return shows;
  }
}
