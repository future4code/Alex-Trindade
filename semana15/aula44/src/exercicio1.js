/*a - O typeScript acusa um erro pois a variável do tipo string só aceita caracteres.*/
var minhaString = "2";
/*b - alterar o tipo para string ou alterar o tipo para any ou também pode ser feito como
abaixo*/
var meuNumero = Number("k");
/*c - Fazendo a tipagem do objeto*/
/*e -*/
var CorFavorita;
(function (CorFavorita) {
    CorFavorita["COR1"] = "violeta";
    CorFavorita["COR2"] = "anil";
    CorFavorita["COR3"] = "azul";
    CorFavorita["COR4"] = "verde";
    CorFavorita["COR5"] = "amarelo";
    CorFavorita["COR6"] = "laranja";
    CorFavorita["COR7"] = "vermelho";
})(CorFavorita || (CorFavorita = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 52,
    corFavorita: CorFavorita.COR1
};
/*d - */
var pessoa2 = {
    nome: "João",
    idade: 21,
    corFavorita: CorFavorita.COR3
};
var pessoa3 = {
    nome: "Benedito",
    idade: 61,
    corFavorita: CorFavorita.COR5
};
var pessoa4 = {
    nome: "Marcos",
    idade: 29,
    corFavorita: CorFavorita.COR7
};
