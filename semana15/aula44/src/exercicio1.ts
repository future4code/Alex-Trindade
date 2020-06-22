/*a - O typeScript acusa um erro pois a variável do tipo string só aceita caracteres.*/
let minhaString: string = "2";

/*b - alterar o tipo para string ou alterar o tipo para any ou também pode ser feito como 
abaixo*/
let meuNumero: number = Number("k");

/*c - Fazendo a tipagem do objeto*/

/*e -*/
enum CorFavorita {
  COR1 = "violeta",
  COR2 = "anil",
  COR3 = "azul",
  COR4 = "verde",
  COR5 = "amarelo",
  COR6 = "laranja",
  COR7 = "vermelho",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: CorFavorita;
};

const pessoa1: pessoa = {
  nome: "Maria",
  idade: 52,
  corFavorita: CorFavorita.COR1,
};

/*d - */
const pessoa2: pessoa = {
  nome: "João",
  idade: 21,
  corFavorita: CorFavorita.COR3,
};

const pessoa3: pessoa = {
  nome: "Benedito",
  idade: 61,
  corFavorita: CorFavorita.COR5,
};

const pessoa4: pessoa = {
  nome: "Marcos",
  idade: 29,
  corFavorita: CorFavorita.COR7,
};
