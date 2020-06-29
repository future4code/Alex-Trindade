import * as fs from "fs";

export class JSONFileManager {
  private filePath: string =
    "C:/Users/alext/Desktop/labenu/Alex-Trindade/semana16/aula48/src/accounts.json";

  public getObjectFromFile(): [] {
    const accountsString: string = fs.readFileSync(this.filePath).toString();
    return accountsString ? JSON.parse(accountsString) : [];
  }

  public writeObjectToFile(objectToSave: any): void {
    const changeArrayToString = JSON.stringify(objectToSave, null, 2);
    fs.writeFileSync(this.filePath, changeArrayToString);
  }
}
