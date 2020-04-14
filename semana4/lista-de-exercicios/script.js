/*
*
*   Exercícios de leitura de código
*   
    1. Ele executa uma função que converte o dólar em real. Ele solicita ao usuário o valor da
    cotação em dólar, armazena na variável cotação e retorna o valor da cotação multiplicado
    pelo valor em dólar fornecido pela variável meu dinheiro. O console.log chama a função e
    a mensagem que aparece se a cotação for R$ 5,11 é: R$ 510,73.

    2. Este exercício executa uma função que lê o tipo de investimento que o usuário deseja e 
    o valor investido. No console aparecerá o novo montante em ações, que é o valor investido 
    (150*1.1) que é igual a 165 e também aparecerá o segundoMontante no valor de 200, que 
    seria investido no tesouro direto mas como essa opção não existe, será exibida a mensagem
    default: TIPO DE INVESTIMENTO INFORMADO INCORRETO!

    3. Nesta função foi declarado um vetor de números e ao percorrer todos os seus elementos
    através do for, ele verifica se o número é par ou ímpar. Se o número for par, ele adiciona
    o número ao array1, senão, ele adiciona o número ao array2. A função console.log irá exibir
    a quantidade total de números (os números presentes no vetor 'numeros'), os números pares
    contidos no 'array1' e os números ímpares contidos no 'array2' 
    
    4. Aqui foi declarado um vetor de números e duas variáveis: numero1 com valor infinito e 
    numero dois com valor 0. Os elementos do vetor são percorridos através de um laço for, onde
    tem duas verificações. A primeira verifica se o elemento é menor que o conteúdo da variável
    numero1. Se for, numero1 recebe o valor do elemento do vetor. A segunda verificação é se o 
    elemento é maior que o numero2. Se iso for verdadeiro, numero2 recebe o valor do elemento. A
    função console.log (numero1) irá exibir o numero1, que é -10, que é o menor número do vetor. 
    A função console.log (numero2) irá exibir o numero2, que é 1590, o maior número do vetor.
*/

/* Exercícios de lógica de programação
   Exercício 1
*/
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3

//a
booleano1 && booleano2 && !booleano4 //False

    //b
    (booleano1 && booleano2) || !booleano3 //False

        //c
        (booleano2 || booleano3) && (booleano4 || booleano1) //True

//d
!(booleano2 && booleano3) || !(booleano1 && booleano3) //True

//e
!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) //True

/* Exercícios de lógica de programação
   Exercício 2
*/

/* O código iniciado pelo meu colega não daria certo pois entra em um loop infinito, pois ele 
não colocou a condição de saída do loop e o console log exibiria apenas o zero, se tudo estivesse
funcionando, porque qualquer número multiplicado por zero é zero.*/

let quantidadePares = Number(prompt("Digite a quantidade de pares que deseja ver: "))
let i = 0
let pares = ""

while (i < quantidadePares * 2) {
    if (i % 2 === 0) {
        pares += i + " "
    }
    i++
}

console.log(pares)

/* Exercícios de lógica de programação
   Exercício 3
*/

function tipoTriangulo(a, b, c) {
    if (a === b && a === c && b === c) {
        return console.log("Triângulo equilátero.")
    }

    if (a === b || a == c || b === c) {
        return console.log("Triângulo isóceles.")
    }

    if (a !== b && a !== c && b !== c) {
        return console.log("Triângulo escaleno.")
    }
}

tipoTriangulo(a = Number(prompt("Digite o primeiro lado ('A') do triângulo: ")),
    b = Number(prompt("Digite o segundo lado ('B') do triângulo: ")),
    c = Number(prompt("Digite o terceiro lado ('C') do triângulo: ")))

/* Exercícios de lógica de programação
   Exercício 4
*/

let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite mais um número: "))
let maiorNumero = 0
let menorNumero = 0

if (numero1 > numero2) {
    maiorNumero = numero1
    menorNumero = numero2
} else {
    maiorNumero = numero2
    menorNumero = numero1
}

console.log("O maior número digitado é " + maiorNumero)

if (numero1 != maiorNumero) {
    console.log(" O número " + numero1 + " não é divisível pelo número " + numero2)
} else {
    if (numero1 % numero2 === 0) {
        console.log(" O número " + numero1 + " é divisível pelo número " + numero2)
    } else {
        console.log(" O número " + numero1 + " não é divisível pelo número " + numero2)
    }
}

if (numero2 != maiorNumero) {
    console.log(" O número " + numero2 + " não é divisível pelo número " + numero1)
} else {
    if (numero2 % numero1 === 0) {
        console.log(" O número " + numero2 + " é divisível pelo número " + numero1)
    } else {
        console.log(" O número " + numero2 + " não é divisível pelo número " + numero1)
    }
}

console.log("A diferença entre eles é " + (maiorNumero - menorNumero))

/* Exercícios de funções
   Exercício 1 */

function segundoMaiorESegundoMenorNumero(vetorNumeros) {
    let maior = vetorNumeros[0]
    let menor = vetorNumeros[0]
    let segundoMaior = vetorNumeros[0]
    let segundoMenor = vetorNumeros[0]

    for (let index = 0; index < vetorNumeros.length; index++) {
        if (vetorNumeros[index] > maior) {
            maior = vetorNumeros[index]
        }

        if (vetorNumeros[index] < menor) {
            menor = vetorNumeros[index]
        }
    }

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > segundoMaior && vetorNumeros[i] < maior) {
            segundoMaior = vetorNumeros[i]
        }

        if (vetorNumeros[i] < segundoMenor && vetorNumeros[i] > menor) {
            segundoMenor = vetorNumeros[i]
        }
    }
    return console.log("O segundo menor número é " + segundoMenor + "\nO segundo maior número é " + segundoMaior)
}

segundoMaiorESegundoMenorNumero([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])

/* Exercícios de funções
   Exercício 2 */

let dizHello = function () {
    return alert("Hello Future4")
}

dizHello()

/* Exercícios de objetos
   Exercício 1

   Objetos e arrays devem ser utilizados para armazenar dados de forma organizada, pois são
   estruturas que podem armazenar diversos valores de uma vez. Devemos utilizar quando trabalhamos
   com grandes quantidades de dados.
   
*/

/* Exercícios de objetos
   Exercício 2 */

function criaRetangulo(lado1, lado2) {
    let altura = 0

    if (lado1 < lado2) {
        altura = lado1
    } else {
        altura = lado2
    }

    const retangulo = {
        lado1: lado1,
        altura: altura,
        lado2: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }

    return console.log("Lado 1: " + retangulo.lado1 + "\n" + "Altura: " + retangulo.altura +
        "\n" + "Lado 2: " + retangulo.lado2 + "\n" + "Perímetro: " + retangulo.perimetro + "\n" +
        "Área: " + retangulo.area)
}

criaRetangulo(Number(prompt("Digite o lado menor do retângulo:")), Number(prompt
    ("Digite o lado maior do retângulo:")))

/* Exercícios de objetos
   Exercício 3 */

const serieFavorita = {
    titulo: 'WestWorld',
    ano: 2016,
    criador: 'Jonathan Nolan',
    elenco: ['Evan Rachel Wood', 'Thandie Newton', 'Jeffrey Wright', 'Ed Harris', 'James Marsden']
}

let atores = ""

for (let index = 0; index < serieFavorita.elenco.length; index++) {
    atores += serieFavorita.elenco[index] + " "
}

console.log("Venha assistir " + serieFavorita.titulo + ", de " + serieFavorita.ano +
    ", criada por " + serieFavorita.criador + " e estrelado por " + atores)

/* Exercícios de objetos
   Exercício 4 */

const pessoa = {
    nome: 'Cindy',
    idade: 23,
    email: 'cindy@gato.com',
    endereco: 'Rua dos gatos, 35 - Gatópolis'
}

console.log("Nome: " + pessoa.nome + "\n" + "Idade: " + pessoa.idade + "\n" + "E-mail: " +
    pessoa.email + "\n" + "Endereço: " + pessoa.endereco)

function anonimizarPessoa() {
    const novaPessoa = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }

    return console.log("Nome: " + novaPessoa.nome + "\n" + "Idade: " + novaPessoa.idade + "\n" +
        "E-mail: " + novaPessoa.email + "\n" + "Endereço: " + novaPessoa.endereco)
}

anonimizarPessoa()

/* Exercícios de funções de array
   Exercício 1 
   
   Antes utilizava os laços, for, for of e while.

   const array = [1, 10, 25, 65, 89]

   for (numeros of array) {
       console.log (numeros)
   }
*/

/*Exercícios de funções de array
   Exercício 2 a e b */

const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

const adultos = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade >= 20) {
        return console.log("Nome: " + pessoa.nome + " idade: " + pessoa.idade)
    }
})

const menoresDeIdade = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade < 20) {
        return console.log("Nome: " + pessoa.nome + " idade: " + pessoa.idade)
    }
})

/*Exercícios de funções de array
   Exercício 3 a, b e c */

function multiplicaPorDois(arrayNumeros) {
    arrayNumeros.forEach(elemento => {
        return console.log(arrayNumeros = elemento * 2)
    });
}

multiplicaPorDois([1, 2, 3, 4, 5, 6])

function multiplicaPorTresString(arrayNumeros) {
    arrayNumeros.forEach(elemento => {
        return console.log((arrayNumeros = elemento * 2).toString)
    });
}

multiplicaPorTresString([1, 2, 3, 4, 5, 6])

function parOuImpar(arrayNumeros) {
    let arrayStrings = []
    arrayNumeros.forEach(elemento => {
        if (elemento % 2 === 0) {
            arrayStrings.push(`${elemento} é par`)
        }
        if (elemento % 2 === 1) {
            arrayStrings.push(`${elemento} é ímpar`)
        }
    });
    return console.log(arrayStrings)
}

parOuImpar([1, 2, 3, 4, 5, 6])

/*Exercícios de funções de array
   Exercício 4  a e b*/

const visitantes = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]

const pessoasPermitidas = visitantes.filter((pessoa, index, array) => {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        return console.log("Nome: " + pessoa.nome + " idade: " + pessoa.idade + " altura: " + pessoa.altura)
    }
})

const pessoasNaoPermitidas = visitantes.filter((pessoa, index, array) => {
    if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
        return console.log("Nome: " + pessoa.nome + " idade: " + pessoa.idade + " altura: " + pessoa.altura)
    }
})

/*Exercícios de funções de array
   Exercício 5 */

const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let email = []
let pronome = ""
let lembrar = ""

consultas.forEach (paciente => {
    if (paciente.genero === 'masculino') {
        pronome = 'Sr.'
        lembrar = 'lembrá-lo'
    } else {
        pronome = 'Sra.'
        lembrar = 'lembrá-la'
    }

    if (paciente.cancelada === false) {
        email.push(`Olá, ${pronome} ${paciente.nome}. Estamos enviando esta mensagem para 
        ${lembrar} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o 
        recebimento deste e-mail.`)
    } else {
        email.push (`Olá, ${pronome} ${paciente.nome}. Infelizmente, sua consulta marcada para 
        o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco 
        para remarcá-la`)
    }
})

console.log (email)