import knex from "knex";

export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await this.connection
        .insert({ id, email, password })
        .into(this.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  }
}
