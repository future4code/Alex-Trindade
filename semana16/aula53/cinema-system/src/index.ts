import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/", testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getActorById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);
    return console.log(result[0][0]);
  } catch (error) {
    console.log(error);
  }
};

const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
        `);
    return console.log(result[0][0]);
  } catch (error) {
    console.log(error);
  }
};

const countActorsByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
        `);
    return console.log(result[0][0].count);
  } catch (error) {
    console.log(error);
  }
};

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  try {
    await connection("Actor").update({ salary: salary }).where("id", id);
    console.log("Alterado com sucesso.");
  } catch (error) {
    console.log(error);
  }
};

const deleteActorById = async (id: string): Promise<any> => {
  try {
    await connection("Actor").where("id", id).delete();
    console.log("Excluído com sucesso.");
  } catch (error) {
    console.log(error);
  }
};

const salaryAverageByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where("gender", gender);
    return result[0].average;
  } catch (error) {
    console.log(error);
  }
};

//getActorById("001");
//getActorByName("Avan Jogia");
//countActorsByGender("male");
//updateActorSalary("002", 256314);
//deleteActorById("001");
//salaryAverageByGender("male").then((value) => console.log(value));
