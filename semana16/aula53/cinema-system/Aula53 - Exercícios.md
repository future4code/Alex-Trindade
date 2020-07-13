### Exercício 1

a) A resposta chega em formato de array, com vários objetos e  dados que vem do banco, dados irrelevantes para nós. 

b) 
```typescript
const  getActorByName  =  async (name:  string):  Promise<any> => {
	try {
		const  result  =  await  connection.raw(`
			SELECT * FROM Actor WHERE name = '${name}'
		`);
		return  console.log(result[0][0]);
	} catch  (error) {
		console.log(error);
	}
};
```
c)
```typescript
const  countActorsByGender  =  async (gender:  string):  Promise<any> => {
	try {
		const  result  =  await  connection.raw(`
			SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
		`);
		return  console.log(result[0][0].count);
	} catch  (error) {
		console.log(error);
	}
};
```

### Exercício 2

a)
```typescript
const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  try {
    await connection("Actor").update({ salary: salary }).where("id", id);
    console.log("Alterado com sucesso.");
  } catch (error) {
    console.log(error);
  }
};
```

b)
```typescript
const deleteActorById = async (id: string): Promise<any> => {
  try {
    await connection("Actor").where("id", id).delete();
    console.log("Excluído com sucesso.");
  } catch (error) {
    console.log(error);
  }
};
```

c)

```typescript
const salaryAverageByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
      .avg("salary as average")
      .where("gender", gender);
    return result[0].average;
  } catch (error) {
    console.log(error);
  }
};
```