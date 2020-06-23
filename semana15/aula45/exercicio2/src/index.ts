function mathOperations(
  type: string,
  number1: number,
  number2: number
): number {
  let result = 0;

  switch (type) {
    case "add":
      result = number1 + number2;
      break;
    case "sub":
      result = number1 - number2;
      break;
    case "mult":
      result = number1 * number2;
      break;
    case "div":
      result = number1 / number2;
      break;
    default:
      console.log("Try again.");
      break;
  }

  return result;
}

console.log(
  "Resultado: " +
    mathOperations(
      process.argv[2],
      Number(process.argv[3]),
      Number(process.argv[4])
    )
);
