/*
    Exercícios de interpretação

    Exercício 1
    Ele faz uma soma da variável som com a variável i. Conforme i é incrementado o valor dele
    muda e é somado com a variávem sum. O resultado impresso é 105

    Exercício 2
    a. O comando push está adicionando o item do vetor lista para a última posição disponível
    do vetor novaLista, desde que a condição seja satisfeita.

    b. [10, 15, 25, 30]

    c. se a variável numero fosse 3: [ 12, 15, 18, 21, 27, 30 ]; se a variável numero fosse 4: 
    [ 12 ]

    Desafio 1: 
    O código imprime o numero de linhas que o usuário digitou com a quantidade exata em cada linha

    0
    00
    000
    0000
*/

//Exercícios de escrita de código
//Exercício 3
//a.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal [0]
let menor = arrayOriginal [0]

for (let numero of arrayOriginal) {
    if (numero > maior) {
        maior = numero
    } 
    if (numero < menor) {
        menor = numero
    }
}

console.log ("O maior número é " + maior + " e o menor número é " + menor)

//b.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []

for (let numero of arrayOriginal) {
    novoArray.push(numero/10)
}

console.log (novoArray)

//c.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const arrayPares = []

for (let numero of arrayOriginal) {
    if (numero%2 === 0) {
        arrayPares.push(numero)
    }
}

console.log (arrayPares)

//d. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const stringArray = []

for (let i = 0; i < arrayOriginal.length; i++) {
    const elemento = arrayOriginal[i]
    stringArray.push("O elemento do índex " + i + " é " + elemento)
}

console.log (stringArray)

//Desafio 2
const numeroEscolhido = Number(prompt("Digite um número: "))
console.log ("Vamos jogar!")
let chute = 0
let tentativas = 0

while (chute !== numeroEscolhido) {
    chute = Number(prompt("Advinhe o número escolhido: "))
    console.log ("O número chutado foi: " + chute)
    tentativas++
    if (chute > numeroEscolhido) {
        console.log ("Errado, o número é menor.")
    } else if (chute < numeroEscolhido) {
        console.log ("Errado, o número é maior.")
    } else {
        console.log ("Acertou!! Parabéns!\nO número de tentativas foi: " + tentativas)
    }
} 

//Desafio 3
const numeroEscolhido = Math.floor(Math.random() * (100 + 1));
console.log ("Vamos jogar!")
let chute = 0
let tentativas = 0

while (chute !== numeroEscolhido) {
    chute = Number(prompt("Advinhe o número escolhido de 0 a 20: "))
    console.log ("O número chutado foi: " + chute)
    tentativas++
    if (chute > numeroEscolhido) {
        console.log ("Errado, o número é menor.")
    } else if (chute < numeroEscolhido) {
        console.log ("Errado, o número é maior.")
    } else {
        console.log ("Acertou!! Parabéns!\nO número de tentativas foi: " + tentativas)
    }
}

//Foi fácil fazer a alteração. Não sei o que poderia ser mais fácil, achei uma alteração simples de se fazer