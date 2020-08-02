import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "../data/BaseDatabase";
import { Request, Response } from "express";
import { BandDTO } from "../model/Band";

export class BandController {
  public static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new Authenticator(),
    new IdGenerator()
  );

  public async createBand(req: Request, res: Response) {
    try {
      const input: BandDTO = {
        name: req.body.name,
        genre: req.body.genre,
        responsible: req.body.responsible,
      };

      await BandController.BandBusiness.createBand(
        req.headers.authorization,
        input
      );

      res.sendStatus(200).send({ sucess: true });
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message });
    }
    //await BaseDatabase.destroyConnection();
  }

  public async getBandDetails(req: Request, res: Response) {
    try {
      const result = await BandController.BandBusiness.getBandDetails(
        req.headers.authorization,
        req.query.parameter as string
      );

      res.status(200).send({ result });
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message });
    }

    //await BaseDatabase.destroyConnection();
  }
}
