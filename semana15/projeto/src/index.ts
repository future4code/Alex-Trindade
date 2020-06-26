import * as moment from "moment";
import * as fs from "fs";

moment.locale("pt-br");

type BankAccount = {
  name: string;
  birthDate: string;
  cpf: string;
  bankBalance: number;
  extract: ExtractItem[];
};

type ExtractItem = {
  date: string;
  description: string;
  value: number;
};

const accountsFilePath: string =
  "C:/Users/alext/Desktop/labenu/Alex-Trindade/semana15/projeto/src/accounts.json";

const createAccount = (name: string, birthDate: string, cpf: string): void => {
  if (!name || !birthDate || !cpf) {
    console.log("Dados inválidos.");
    return;
  }

  const birthDateFormatted: moment.Moment = moment(birthDate, "DD, MM, YYYY");
  const todaysDate: moment.Moment = moment();
  const age: number = todaysDate.diff(birthDateFormatted, "years");

  if (age < 18) {
    console.log("Você tem que ser maior de 18 anos.");
    return;
  }

  const accountsString: string = fs.readFileSync(accountsFilePath).toString();
  const accounts: BankAccount[] = JSON.parse(accountsString);

  const accountFound = accounts.find((account: BankAccount): boolean => {
    return account.cpf === cpf;
  });

  if (accountFound !== undefined) {
    console.log("Já existe uma conta com esse CPF.");
    return;
  }

  accounts.push({
    name: name,
    birthDate: birthDate,
    cpf: cpf,
    bankBalance: 0,
    extract: [],
  });

  const changeAccountsToString = JSON.stringify(accounts, null, 2);
  fs.writeFileSync(accountsFilePath, changeAccountsToString);
  console.log("Conta criada com sucesso.");
};

const getBalance = (name: string, cpf: string): void => {
  if (!name || !cpf) {
    console.log("Dados inválidos.");
    return;
  }

  const accountsString: string = fs.readFileSync(accountsFilePath).toString();
  const accounts: BankAccount[] = JSON.parse(accountsString);

  const accountFound = accounts.find((account: BankAccount): boolean => {
    return account.name === name && account.cpf === cpf;
  });

  if (accountFound !== undefined) {
    console.log("O seu saldo é de R$ " + accountFound.bankBalance);
    return;
  } else {
    console.log("Dados incorretos.");
    return;
  }
};

const addBalance = (name: string, cpf: string, value: number): void => {
  if (!name || !cpf || !value) {
    console.log("Dados inválidos.");
    return;
  }

  const accountsString: string = fs.readFileSync(accountsFilePath).toString();
  const accounts: BankAccount[] = JSON.parse(accountsString);

  const newAccounts = accounts.map((account: BankAccount) => {
    if (account.name === name && account.cpf === cpf) {
      return { ...account, bankBalance: account.bankBalance + value };
    } else {
      console.log("Dados incorretos.");
    }
  });

  const changeAccountsToString = JSON.stringify(newAccounts, null, 2);
  fs.writeFileSync(accountsFilePath, changeAccountsToString);
  console.log("Depósito realizado com sucesso.");
};

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
