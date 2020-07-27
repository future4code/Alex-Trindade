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

const createToDoListUserTable = async (): Promise<any> => {
  try {
    await connection.raw(`
        CREATE TABLE TodoListUser (
            id VARCHAR(255) PRIMARY KEY, 
            name VARCHAR(255) NULL, 
            nickname VARCHAR(255) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL
        );
    `);
    console.log("Criado com sucesso.");
  } catch (error) {
    console.log(error);
  }
};

// createToDoListUserTable();

const createToDoListTask = async (): Promise<any> => {
  try {
    await connection.raw(`
            CREATE TABLE TodoListTask (
                id VARCHAR(255) PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id varchar(255) NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
            );
        `);
    console.log("Criado com sucesso.");
  } catch (error) {
    console.log(error);
  }
};

// createToDoListTask();

const createRelationTaskTable = async (): Promise<any> => {
  try {
    await connection.raw(`
        CREATE TABLE TodoListResponsibleUserTaskRelation (
            task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
            FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
        );
    `);
    console.log("Criado com sucesso.");
  } catch (error) {
    console.log(error);
  }
};

// createRelationTaskTable();

const createUser = async (
  newName: string,
  newNickname: string,
  newEmail: string
): Promise<any> => {
  try {
    const userId: string =
      Date.now().toString() + Math.floor(Math.random() * 100).toString();

    await connection
      .insert({
        id: userId,
        name: newName,
        nickname: newNickname,
        email: newEmail,
      })
      .into("TodoListUser");
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};

app.put("/user", async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.nickname || !req.body.email) {
    console.log("Dados incorretos!");
  }

  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "success!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

const getUserById = async (userId: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT id, nickname FROM TodoListUser WHERE id = "${userId}"
    `);
    return result[0][0];
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};

app.get("/user/:id", async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      message: "Envie um ID para busca.",
    });
  }

  try {
    const user = await getUserById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

const editUser = async (
  id: string,
  name?: string,
  nickname?: string
): Promise<any> => {
  try {
    if (name !== undefined && nickname === undefined) {
      await connection("TodoListUser").update({ name }).where("id", "=", id);
      return name;
    } else if (name === undefined && nickname !== undefined) {
      await connection("TodoListUser")
        .update({ nickname })
        .where("id", "=", id);
      return nickname;
    } else {
      await connection("TodoListUser")
        .update({ name, nickname })
        .where("id", "=", id);
      return { name, nickname };
    }
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      message: "Envie um ID para busca.",
    });
  }

  try {
    if (req.body.name !== "" && req.body.nickname === "") {
      const updateName = await editUser(req.params.id, req.body.name);
      res.status(200).send(updateName);
    } else if (req.body.name === "" && req.body.nickname !== "") {
      const updateNickname = await editUser(req.params.id, req.body.nickname);
      res.status(200).send(updateNickname);
    } else {
      const updateNameAndNickname = await editUser(
        req.params.id,
        req.body.name,
        req.body.nickname
      );
      res.status(200).send(updateNameAndNickname);
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
