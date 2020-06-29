import { UserAccount } from './UserAccount';
import { Bank } from './Bank';
import { JSONFileManager } from "./JSONFileManager";

const user = new UserAccount

const action = process.argv[2].toLowerCase();

switch (action) {
  case "criar" || "criar conta":
    createAccount(
      process.argv[3].toLowerCase(),
      process.argv[4],
      process.argv[5]
    );
    break;
  case "saldo":
    getBalance(process.argv[3], process.argv[4]);
    break;
  case "deposito" || "depósito":
    addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
    break;
  default:
    console.log("Função inválida.");
    break;
}
