import { Client } from "./Client";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    cep: string,
    floorsQuantity: number
  ) {
    super(floorsQuantity, cep);
  }

  public getCnpj() {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
