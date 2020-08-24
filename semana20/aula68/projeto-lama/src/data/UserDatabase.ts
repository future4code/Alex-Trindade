import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  protected static TABLE_NAME = "UserLama";

  public async signup(user: User): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole(),
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ email });

      return User.toUserModel(result[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
