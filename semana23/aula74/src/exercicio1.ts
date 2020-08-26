//a

const mostraNumerosA = (numero: number): void => {
  if (numero >= 0) {
    mostraNumerosA(numero - 1);
    console.log(numero);
  }
};

mostraNumerosA(5);

//b

const mostraNumerosB = (numero: number): void => {
  if (numero >= 0) {
    console.log(numero);
    mostraNumerosB(numero - 1);
  }
};

mostraNumerosB(5);
