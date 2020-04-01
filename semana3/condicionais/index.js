/*
    Exercícios de interpretação de código

    1 - O código pede um número para o usuário para realizar um teste. Se o número for par, 
    exibirá a mensagem "Passou no teste."; Senão, para os números ímpares, exibirá a mensagem 
    "Não passou no teste.". Ele verifica se o número digitado é par ou ímpar. 

    2 - a. O programa serve para consultar o preço das frutas vendidas no mercado.
    
    b. "O preço da fruta Maçã é R$ 2.25"

    c. (2*3.50) + 2.25 + (3*5) + 0.30 = R$ 24.55

    d. "O preço da fruta Pêra é R$ 5" /ele cai no default

    3 - VM196:13 Uncaught ReferenceError: mensagem is not defined at <anonymous>:13:13
    O erro quer dizer que a variável mensagem não foi declarada. Isso acontece porque a 
    variável let foi declarada dentro do escopo local, no bloco de código if-else.
    No caso do programa, seu uso fica restrito ao bloco de código if-else onde ela foi 
    declarada. Para ser uma variável global ela teria que ser declarada em outro local, fora
    do bloco if-else ou usar var ao invés de let.
*/

//Exercícios de escrita de código

//Exercício 4 a.
/*let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite mais um número:"))
let decrescente = []

if (primeiroNumero > segundoNumero) {
    decrescente[0] = primeiroNumero
    decrescente[1] = segundoNumero
} else {
    decrescente [0] = segundoNumero
    decrescente [1] = primeiroNumero
}

console.log(decrescente)
//se os números forem iguais aparece um ao lado do outro, sem ordem definida*/
/*
//Exercício 4 - b.
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite mais um número:"))
let terceiroNumero = Number(prompt("Achou que tinha acabado? Digite mais um número:"))
let decrescente = []

if (primeiroNumero > segundoNumero) {
    if (segundoNumero > terceiroNumero){
        decrescente[0] = primeiroNumero
        decrescente[1] = segundoNumero
        decrescente[2] = terceiroNumero
    } else {
        if (primeiroNumero > terceiroNumero){
            decrescente[0] = primeiroNumero
            decrescente[1] = terceiroNumero
            decrescente[2] = segundoNumero
        } else {
            decrescente[0] = terceiroNumero
            decrescente[1] = primeiroNumero
            decrescente[2] = segundoNumero
        }
    }
} else{
    if (segundoNumero > terceiroNumero) {
        if (primeiroNumero > terceiroNumero) {
            decrescente[0] = segundoNumero
            decrescente[1] = primeiroNumero
            decrescente[2] = terceiroNumero
        } else {
            decrescente[0] = segundoNumero
            decrescente[1] = terceiroNumero
            decrescente[2] = primeiroNumero
        }
    } else {
        decrescente[0] = terceiroNumero
        decrescente[1] = segundoNumero
        decrescente[2] = primeiroNumero
    }
} 

console.log(decrescente)*/

//os numeros iguais aparecem um ao lado do outro como no exercício anterior

// 4 - c.

let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite mais um número:"))
let terceiroNumero = Number(prompt("Achou que tinha acabado? Digite mais um número:"))
let decrescente = []

if (primeiroNumero === segundoNumero || primeiroNumero === terceiroNumero || segundoNumero === terceiroNumero) {
    console.log("Digite números diferentes.")
} else {
    if (primeiroNumero > segundoNumero) {
        if (segundoNumero > terceiroNumero) {
            decrescente[0] = primeiroNumero
            decrescente[1] = segundoNumero
            decrescente[2] = terceiroNumero
        } else {
            if (primeiroNumero > terceiroNumero) {
                decrescente[0] = primeiroNumero
                decrescente[1] = terceiroNumero
                decrescente[2] = segundoNumero
            } else {
                decrescente[0] = terceiroNumero
                decrescente[1] = primeiroNumero
                decrescente[2] = segundoNumero
            }
        }
    } else {
        if (segundoNumero > terceiroNumero) {
            if (primeiroNumero > terceiroNumero) {
                decrescente[0] = segundoNumero
                decrescente[1] = primeiroNumero
                decrescente[2] = terceiroNumero
            } else {
                decrescente[0] = segundoNumero
                decrescente[1] = terceiroNumero
                decrescente[2] = primeiroNumero
            }
        } else {
            decrescente[0] = terceiroNumero
            decrescente[1] = segundoNumero
            decrescente[2] = primeiroNumero
        }
    }
}