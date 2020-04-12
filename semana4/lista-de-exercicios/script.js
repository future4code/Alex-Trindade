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