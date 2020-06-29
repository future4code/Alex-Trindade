import { JSONFileManager } from "./JSONFileManager";
import { UserAccount } from "./UserAccount";

export class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager;
  }

  public createAccount(userAccount: UserAccount): void {
    const accounts: UserAccount[] = this.getAllAccounts();
  }

  public getAllAccounts(): UserAccount[] {
    return new JSONFileManager().getObjectFromFile();
  }

  // public getAccountByCpfAndName(
  //   cpf: string,
  //   name: string
  // ): UserAccount | undefined {
  //   // lógica de pegar conta pelo CPF e Nome aqui
  // }
}
