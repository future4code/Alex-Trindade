import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
    await BaseDatabase.destroyConnection();
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    await BaseDatabase.destroyConnection();
    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
    await BaseDatabase.destroyConnection();
    return result[0];
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
    await BaseDatabase.destroyConnection();
  }
}
