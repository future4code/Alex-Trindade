import { Client } from "./Client";

class ClientManager {
  private clients: Client[] = [];
  
  public getClientsQuantity(): number {
    return this.clients.length;
  }
}
