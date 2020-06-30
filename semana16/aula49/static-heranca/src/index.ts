import { Customer } from "./Customer";
import { User } from "./User";

/*
    1-a. Não seria possível imprimir pois é private.
    b. Uma vez.
*/

const userInstance: User = new User("1", "maria@live.com", "Maria", "password");

//console.log(userInstance.password);
console.log(
  "id: " +
    userInstance.getId() +
    "\n" +
    "Nome: " +
    userInstance.getName() +
    "\n" +
    "E-mail: " +
    userInstance.getEmail()
);

/*
    2-a. 1 vez.
    b. 2 vezes. 1 vez pelo console.log anterior do exercício 1 e a segunda vez é porque 
    a classe customer é filha da classe User, usando o método construtor da classe pai.
*/

const customerInstance: Customer = new Customer(
  "360",
  "cindy@cat.com",
  "Cindy",
  "4239",
  "40587000457690039878"
);

console.log(
  "id: " +
    customerInstance.getId() +
    "\n" +
    "Nome: " +
    customerInstance.getName() +
    "\n" +
    "E-mail: " +
    customerInstance.getEmail() +
    "\n" +
    "Cartão de crédito: " +
    customerInstance.getCreditCard() +
    "\n" +
    "Total: " +
    customerInstance.purchaseTotal
);

/*
    3-a. Não porque ela é privada na classe pai.
*/

console.log(
  "id: " +
    customerInstance.getId() +
    "\n" +
    "Nome: " +
    customerInstance.getName() +
    "\n" +
    "E-mail: " +
    customerInstance.getEmail() +
    "\n" +
    "Cartão de crédito: " +
    customerInstance.getCreditCard() +
    "\n" +
    "Total: " +
    customerInstance.purchaseTotal
);

/*
    4-
*/

console.log(customerInstance.introduceYourself());

/*
    5-
*/

console.log(customerInstance.introduceYourselfName());