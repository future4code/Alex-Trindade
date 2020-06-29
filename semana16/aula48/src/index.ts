/* eslint-disable */
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";
import { JSONFileManager } from "./JSONFileManager";

const fileManager: JSONFileManager = new JSONFileManager();
const accounts: UserAccount[] = fileManager.getObjectFromFile();
const bank = new Bank(accounts, fileManager);

const action = process.argv[2].toLowerCase();

switch (action) {
  case "criar" || "criar conta":
    const newAccount = new UserAccount(
      process.argv[3].toLowerCase(),
      process.argv[4],
      process.argv[5]
    );

    bank.createAccount(newAccount)
    break;
  // case "saldo":
  //   getBalance(process.argv[3], process.argv[4]);
  //   break;
  // case "deposito" || "depósito":
  //   addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
  //   break;
  default:
    console.log("Função inválida.");
    break;
}
