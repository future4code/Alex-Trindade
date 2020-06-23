function createPerson(name, age) {
    return { name: name, age: age };
}
var myPerson = createPerson(process.argv[2], Number(process.argv[3]));
console.log("Olá, " + myPerson.name + "! Você tem " + myPerson.age + " anos.");
/*
Exercício 1

a- process.argv["posição no array" 2]

b-
*/
