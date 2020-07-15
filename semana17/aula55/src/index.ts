import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { IdGenerator } from "./service/IdGenerator";
import { Authenticator } from "./service/Authenticator";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const idGenerator = new IdGenerator();
const userDb = new UserDatabase();
const authenticator = new Authenticator();

// new UserDatabase().createUser("12345", "marcinha@hotmail.com", "12345");

app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha inválida.");
    }

    const id = idGenerator.generate();
    await userDb.createUser(id, req.body.email, req.body.password);
    const token = authenticator.generateToken({ id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
