const imprimeArray = (array: number[], i: number = array.length - 1): any => {
  if (i >= 0) {
    imprimeArray(array, i - 1);
    console.log(`Item ${i}: ${array[i]}`);
  }
};

imprimeArray([1, 2, 3, 4])