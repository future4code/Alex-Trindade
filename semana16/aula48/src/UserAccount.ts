/* eslint-disable */
import { Transaction } from "./Transaction";
import * as moment from "moment";

export class UserAccount {
  private cpf: string;
  private name: string;
  private birthDate: string;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(name: string, cpf: string, birthDate: string) {
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;

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
  }

  public useName() {
    return this.name;
  }

  public useCpf() {
    return this.cpf;
  }

  public useBirthDate() {
    return this.birthDate;
  }

  public getBalance() {
    //Aqui deve ser inserida a lógica de pegar saldo do usuário
  }

  public addBalance(value: number): void {
    //Aqui deve ser inserida a lógica de adicionar saldo
    console.log("Saldo atualizado com sucesso");
  }
}
