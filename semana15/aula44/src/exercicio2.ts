function operacoesMatematicas(numero1: number, numero2: number) {
  let resultado: number = 0;

  console.log("Soma: ", (resultado = numero1 + numero2));
  console.log("Subtração: ", (resultado = numero1 - numero2));
  console.log("Multiplicação: ", (resultado = numero1 * numero2));
  console.log("Divisão: ", (resultado = numero1 / numero2));
}

operacoesMatematicas(2, 3);
