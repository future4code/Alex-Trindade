/*
    1-a. false
    b. false
    c. true
    d. false
    e. boolean

    2- a. Array é um vetor, ou um conjunto de dados que podem ser de diferentes tipos, 
    organizados. 
    let(ou o tipo de variável que preferir) vetor = [1, 2, 3, "alex"] 

    b. 0

    c. nome do vetor + .length ex: vetor.lenght

    d. I. undefined
    II. null
    III. 11
    IV. 3 e 4
    V. 19 e 9
    VI. 3
    VII. 1
*/

//ex1
let celsius = 0
let farenheit = 0
let kelvin = 0

farenheit = 77
kelvin = (farenheit - 32) * 5/9 + 273.15
console.log (farenheit + "º Farenheit é igual a " + kelvin+ "º Kelvin.")

celsius = 80
farenheit = 0
farenheit = (1.8 * celsius) + 32
console.log (celsius + "º Celsius é igual a " + farenheit + "º Farenheit.")

//celsius = 30
celsius = Number (prompt ("Qual a temperatura em celsius?"))
farenheit, kelvin = 0
farenheit = (1.8 * celsius) + 32
kelvin = celsius + 273.15
console.log (celsius + "º Celsius é igual a " + farenheit + "º Farenheit e " + kelvin + "º Kelvin.")

//ex2

const vetorPerguntas = ["Qual é o seu nome?", "Qual é a sua idade?", "Qual o seu signo?", "Qual a sua comida favorita?", "Qual o seu animal preferido?"]
let respostas = ["", "", "", "", ""]

respostas[0] = prompt(vetorPerguntas[0])
respostas[1] = prompt(vetorPerguntas[1])
respostas[2] = prompt(vetorPerguntas[2])
respostas[3] = prompt(vetorPerguntas[3])
respostas[4] = prompt(vetorPerguntas[4])

console.log ("1. " + vetorPerguntas[0] + "\nResposta: " + respostas[0])
console.log ("2. " + vetorPerguntas[1] + "\nResposta: " + respostas[1])
console.log ("3. " + vetorPerguntas[2] + "\nResposta: " + respostas[2])
console.log ("4. " + vetorPerguntas[3] + "\nResposta: " + respostas[3])
console.log ("5. " + vetorPerguntas[4] + "\nResposta: " + respostas[4])

//ex3
const kwh = 0.05
let consumo = 280
let resultado = 0

resultado = 280 * kwh
console.log ("O valor a ser pago será de R$ " + resultado + ",00")

let desconto = (15/100)*(280*kwh)

resultado =(280*kwh) - desconto
console.log ("O valor a ser pago será de R$ " + resultado) 