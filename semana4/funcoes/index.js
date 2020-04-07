/*
    Exercícios de interpretação de código

    Exercício 1
    a. Retorna o array vazio
    b. Retorna 6) [0, 1, 0, 1, 2, 3]
    c. Retorna (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

    Exercício 2
    a. 0, 2, undefined
    b. Funcionaria, pois o código verifica o conteúdo que está no array e na variável nome, então, 
       se o conteúdo da comparação é igual ele retorna a posição em que o conteúdo se encontra, 
       independente do tipo.

    Exercício 3
    A função soma o conteúdo do array em cada posição com o valor da variável resultado A e 
    multiplica com o valor da variável B e retorna um array novo com o resultado dessas operações 
    matemáticas. metodoNumerico.
*/

/*
    *
    *
    *
        Exercícios de escrita de código
    *
    *
    * 
*/

/* 
    Exercício 4
    a.
*/
function idadeCachorro(anosHumanos) {
    return console.log("Seu cachorro tem " + anosHumanos * 7 + " anos de cachorro.")
}

idadeCachorro(Number(prompt("Digite a idade que deseja converter para idade de cachorro")))

/* 
    Exercício 4
    b.
*/

function cadastro(vetorCadastro) {
    if (vetorCadastro[3] === "s") {
        vetorCadastro[3] = "sou"
    } else if (vetorCadastro[3] === "n") {
        vetorCadastro[3] = "não sou"
    } else {
        alert("Erro!")
    }
    return console.log("Eu sou " + vetorCadastro[0] + " tenho " + vetorCadastro[1] +
        " anos, moro em " + vetorCadastro[2] + " e " + vetorCadastro[3] + " estudante.")
}

cadastro([prompt("Digite seu nome"), Number(prompt("Digite sua idade")), prompt("Digite o seu endereço"),
prompt("Você é estudante? [S/N]").toLowerCase()])

/* 
    Exercício 5
*/
let seculo = (ano) => {
    if (ano < 1000 || ano > 2020) {
        alert("Digite novamente.")
    } else {
        let numero = Math.ceil(ano / 100)

        const conversorRomano = (numero) => {
            let romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
            let decimais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
            let numeroRomano = ""
            let i = 0;
            while (numero > 0) {
                if (numero >= decimais[i]) {
                    numeroRomano += romanos[i]
                    numero -= decimais[i]
                }
                else {
                    i++;
                }
            }
            return numeroRomano;
        }
       return console.log ("O ano " + ano + " pertence ao século " + conversorRomano(numero))
    }
}

seculo(prompt("Digite o ano"))

/* 
    Exercício 6
    a.
*/
function quantidadeElementos (vetorNumeros) {
    return console.log("A quantidade de elementos é " + vetorNumeros.length)
}

quantidadeElementos([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])

/* 
    Exercício 6
    b.
*/

function parOuImpar (numero) {
    if (numero % 2 === 0) {
        return console.log ("O número " + numero + " é par")
    } else {
        return console.log ("O número " + numero + " é ímpar")
    }
}

parOuImpar (prompt("Digite um número:"))

/* 
    Exercício 6
    c.
*/
function arrayPares (vetor) {
    let quantidadePares = 0
    for (let index = 0; index < vetor.length; index++) {
        if (vetor [index] % 2 === 0) {
            quantidadePares++
        }
    }
    return console.log ("A quantidade de números pares é " + quantidadePares)
}

arrayPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])

/* 
    Exercício 6
    d.
*/
function arrayPares (vetor) {
    let pares = ""
    for (let index = 0; index < vetor.length; index++) {
        if (vetor [index] % 2 === 0) {
            pares += vetor[index] + " "
        }
    }
    return console.log ("Os números pares são " + pares)
}

arrayPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])