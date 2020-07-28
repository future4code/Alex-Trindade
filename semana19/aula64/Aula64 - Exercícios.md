### Exercício 1

a) 
```typescript
export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}
```

b)
```typescript
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.life < 0 ||
    input.defense === undefined ||
    input.defense < 0 ||
    input.strength === undefined ||
    input.strength < 0
  ) {
    return false;
  }

  return true;
};
```

### Exercício 2

a)
```typescript
test("testing false for empty name", () => {
    const character: Character = {
      name: "",
      life: 1500,
      defense: 500,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });
```

b)
Se o valor de life for vazio, a ide vai reclamar porque está esperando um número. O mesmo vale para as letras c, d, e.
```typescript
test("testing false for empty life", () => {
    const character: Character = {
      name: "Pernalonga",
      life: undefined,
      defense: 500,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });
```

c)
```typescript
test("testing false for empty strength", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 500,
      defense: 200,
      strength: undefined,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });
```

d)
```typescript
test("testing false for empty defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: undefined,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });
```

e)
```typescript
test("testing false for negative defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: -5,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(false);
  });
```

f)
```typescript
test("testing true for zero defense", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: 0,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(true);
  });
```

g)
```typescript
test("testing true for all valid informations", () => {
    const character: Character = {
      name: "Pernalonga",
      life: 1500,
      defense: 200,
      strength: 300,
    };

    const result = validateCharacter(character);

    expect(result).toBe(true);
  });
```

### Exercício 3

a) 
```typescript
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid Character!");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```

b)
```typescript
export const performAttackInverse = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid Character!");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```

c) Na primeira implementação, chamamos a função de validar as entradas na condição. Na segunda implementação, chamamos a função de validação das entradas como parâmetro da função de ataque.

### Exercício 4

a) Da função performAttack, pois ela herda dependências da função validateCharacter e como queremos fazer um teste unitário, um mock vai ajudar a não implementar a função validateCharacter.

b)
```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
		return true
	});
});
```

c)
```typescript
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
		return false
	});
});
```

### Exercício 5

a)
```typescript
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Ryu",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    const defender: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 200,
      strength: 400,
    };

    performAttackInverse(attacker, defender, validatorMock as any);
    expect(defender.life).toEqual(900);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
```

b)
```typescript
test("testing return invalid character", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Ryu",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    const defender: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 200,
      strength: 400,
    };

    try {
      performAttackInverse(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid Character!");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
```

### Exercício 6

a)
```typescript
test("Testing defense against attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Vega",
      life: 1500,
      defense: 300,
      strength: 600,
    };

    const defender: Character = {
      name: "M.Bison",
      life: 1500,
      defense: 700,
      strength: 1000,
    };

    performAttackInverse(attacker, defender, validatorMock as any);
    expect(defender.life).toEqual(1500);
  });
```