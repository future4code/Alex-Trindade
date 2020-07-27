import { User } from "./User";
import * as moment from "moment";

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string
  ) {}

  public getAge(): number {
    const birthDateFormatted: moment.Moment = moment(this.birthDate, "DD, MM, YYYY");
    return moment().diff(birthDateFormatted, "years");
  }
}
