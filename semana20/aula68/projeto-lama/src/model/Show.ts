export class Show {
  constructor(
    private id: string,
    private weekDay: Days,
    private startTime: number,
    private endTime: number,
    private bandId: string
  ) {}

  public getId() {
    return this.id;
  }

  public getWeekDay() {
    return this.weekDay;
  }

  public getStartTime() {
    return this.startTime;
  }

  public getEndTime() {
    return this.endTime;
  }

  public getBandId() {
    return this.bandId;
  }

  public static stringToDays(input: string): Days {
    switch (input.toUpperCase()) {
      case "FRIDAY":
        return Days.FRIDAY;
      case "SATURDAY":
        return Days.SATURDAY;
      case "SUNDAY":
        return Days.SUNDAY;
      default:
        throw new Error("Invalid day");
    }
  }

  public static toShowModel(show: any): Show {
    return new Show(
      show.id,
      Show.stringToDays(show.weekDay),
      show.startTime,
      show.endTime,
      show.bandId
    );
  }
}

export interface ShowDTO {
  weekDay: string;
  startTime: number;
  endTime: number;
  bandId: string;
}

export enum Days {
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export interface ShowsInADayDto {
  band: string;
  genre: string;
}
