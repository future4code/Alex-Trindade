import { HashManager } from "./../services/HashManager";
import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashManager(),
    new Authenticator(),
    new IdGenerator()
  );

  async signup(req: Request, res: Response) {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };

      const result = await UserController.UserBusiness.signup(input);

      res.status(200).send({ result });
    } catch (error) {
      res.status(error.errorCode || 400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async login(req: Request, res: Response) {
    try {
      const input: LoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await UserController.UserBusiness.getUserByEmail(input);

      res.status(200).send({ token });
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
