/*
  Exercício 1 

  a- process.argv["posição no array" 2]

  b e c
*/
type person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): person {
  return { name: name, age: age };
}

const myPerson = createPerson(process.argv[2], Number(process.argv[3]));

console.log(
  "Olá, " +
    myPerson.name +
    "! Você tem " +
    myPerson.age +
    " anos. Em sete anos você terá " +
    (myPerson.age + 7)
);
