import { BaseDatabase } from "./BaseDatabase";
import { Show, ShowsInADayDto } from "../model/Show";

export class ShowDatabase extends BaseDatabase {
  protected static TABLE_NAME = "ShowLama";

  public async newShow(show: Show) {
    try {
      await this.getConnection()
        .insert({
          id: show.getId(),
          week_day: show.getWeekDay(),
          start_time: show.getStartTime(),
          end_time: show.getEndTime(),
          band_id: show.getBandId(),
        })
        .into(ShowDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async verifyShowTime(
    week_day: string,
    start_time: number,
    end_time: number
  ): Promise<boolean> {
    try {
      const show = await this.getConnection()
        .select("*")
        .from(process.env.SHOW_DB_NAME)
        .where({ week_day })
        .andWhere("start_time", "<", end_time)
        .andWhere("end_time", ">", start_time);

      return true;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllShowsInADate(weekDay: string): Promise<ShowsInADayDto[]> {
    try {
      const shows = await this.getConnection()
        .select(
          `MusicBandLama.name as band`,
          `MusicBandLama.music_genre as genre`
        )
        .from(ShowDatabase.TABLE_NAME)
        .join(
          `MusicBandLama`,
          `${ShowDatabase.TABLE_NAME}.band_id`,
          `MusicBandLama.id`
        )
        .where(`${ShowDatabase.TABLE_NAME}.week_day`, "=", weekDay)
        .orderBy(`${ShowDatabase.TABLE_NAME}.start_time`);

      return shows;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
