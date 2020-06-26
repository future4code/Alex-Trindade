import * as fs from "fs";

const data: string = "Comprar pão\nComprar Sabonete\n";
const fileName: string = process.argv[2];
const newTask: string = process.argv[3] + "\n";

/*try {
  fs.writeFileSync(fileName, data);
  console.log("Arquivo criado com sucesso.");
} catch (error) {
  console.error(error);
}*/

try {
  fs.appendFileSync(fileName, newTask);
  console.log("Tarefa adicionada com sucesso!");
} catch (error) {
  console.error(error);
}
