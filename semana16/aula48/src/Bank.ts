/* eslint-disable */
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

    const userAccounts = accounts.map(
      (item) => new UserAccount(item.name, item.cpf, item.birthDate)
    );

    const accountFound = userAccounts.find((account: UserAccount): boolean => {
      return account.useCpf() === userAccount.useCpf();
    });

    if (accountFound !== undefined) {
      console.log("Já existe uma conta com esse CPF.");
      return;
    }

    accounts.push(userAccount);

    new JSONFileManager().writeObjectToFile(accounts);

    console.log("Conta criada com sucesso.");
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
