import { Industry } from "./Industry";
import { Residence } from "./Residence";
import { Client } from "./Client";
import { Commerce } from "./Commerce";

/*
  1-a. Imprimi todas as propriedades. Porque nenhuma era privada.
*/
const client: Client = {
  name: "Cindy",
  registrationNumber: 356,
  consumedEnergy: 71,

  calculateBill: () => {
    return 3;
  },
};

console.log(
  `Nome: ${client.name} \nRegistro: ${
    client.registrationNumber
  } \nEnergia Consumida: ${
    client.consumedEnergy
  } \nValor a pagar: R$ ${client.calculateBill()}`
);

/*
  2-a. Cannot an instance of an abstract class. Aconteceu exatamente o que foi ensinado
  anteriormente, uma classe abstrata não pode ser instanciada.

  b. Precisamos criar uma classe filha e instanciá-la.
*/

/**
   3- a. Precisamos criar uma classe filha e instanciá-la.

   b. Porque ela possui atributos com acesso restrito.

   c. Ela é abstrata pois não precisa ser instanciada.
 */

const instancedResidence: Residence = new Residence(4, "13469-470");
const instancedCommerce: Commerce = new Commerce(20, "03152-210");
const instancedIndustry: Industry = new Industry(56, "13060-160");

console.log(
  `CEP Residência: ${instancedResidence.getCep()} 
  \nCEP Comércio: ${instancedCommerce.getCep()} 
  \nCEP Indústria: ${instancedIndustry.getCep()}`
);

/**
 * 4- name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep. Porque ela 
 * herda coisas da classe Residence e da interface client.
 */

 /**
  * 5- a. As semelhançãs são o que vem da interface client.
  * 
  * b. As diferenças são o CNPJ e o que vem da classe Commerce.
  */

/**
 * 6- a. Industry porque é onde são definidos os atributos que a industria deve possuir, é
 * a classe pai.
 *  
 * b. Client, porque é um cliente e nesta interface estão definidas as características comuns
 * a todos os clientes.
 * 
 * c. Pra gente perceber o erro? Falta o atributo/função calculateBill
 */

/**
 * 7-
 */