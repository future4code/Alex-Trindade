import { Transaction } from "./Transaction";

export class UserAccount {
  private cpf: string;
  private name: string;
  private birthDate: string;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, birthDate: string) {
    this.cpf = cpf;
    this.name = name;
    this.birthDate = birthDate;
  }

  public getBalance() {
    //Aqui deve ser inserida a lógica de pegar saldo do usuário
  }

  public addBalance(value: number): void {
    //Aqui deve ser inserida a lógica de adicionar saldo
    console.log("Saldo atualizado com sucesso");
  }
}
