import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ShowDTO } from "../model/Show";

export class ShowController {
  private static ShowBusiness = new ShowBusiness(
    new ShowDatabase(),
    new Authenticator(),
    new IdGenerator()
  );

  public async newShow(req: Request, res: Response) {
    try {
      const data: ShowDTO = {
        weekDay: req.body.week_day,
        startTime: Number(req.body.start_time),
        endTime: Number(req.body.end_time),
        bandId: req.body.band_id,
      };

      await ShowController.ShowBusiness.newShow(
        req.headers.authorization,
        data
      );

      res.sendStatus(200).send({ sucess: true });
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message });
    }
  }

  public async getAllShowsInADay(req: Request, res: Response) {
    try {
      const shows = await ShowController.ShowBusiness.getAllShowsInADay(
        req.headers.authorization,
        req.query.weekDay as string
      );

      res.status(200).send({ shows });
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message });
    }
  }
}
