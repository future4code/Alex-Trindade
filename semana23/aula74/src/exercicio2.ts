const somaNumeros = (numero: number, soma: number = 0): number => {
  if (numero === 0) {
    return soma;
  }
  return somaNumeros(numero - 1, soma + numero);
};

console.log(somaNumeros(10));