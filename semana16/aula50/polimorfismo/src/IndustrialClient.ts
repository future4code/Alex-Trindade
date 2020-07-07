import { Client } from "./Client";
import { Industry } from "./Industry";

export class InstrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegistrationNumber: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  getIndustrialRegistrationNumber() {
    return this.industrialRegistrationNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
