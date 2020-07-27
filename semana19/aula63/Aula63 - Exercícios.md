### Exercício 1

a) 
```typescript
interface User {
  name: string;
  balance: number;
}
```

b)
```typescript
function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
}
```

### Exercício 2

a)
```typescript
test("Testing balance greater than value", () => {
    const user: User = {
      name: "Alex",
      balance: 5000,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({ ...user, balance: 50 });
  });
```

b)
```typescript
test("Testing balance equals the value", () => {
    const user: User = {
      name: "Cindy",
      balance: 200,
    };

    const result = performPurchase(user, 200);

    expect(result).toEqual({ ...user, balance: 0 });
  });
```

c)
```typescript
test("Testing balance is less than the value", () => {
    const user: User = {
      name: "Maria",
      balance: 150,
    };

    const result = performPurchase(user, 200);

    expect(result).toEqual(undefined);
  });
```

### Exercício 3

a) Ok

b)
```typescript
export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}
```

c) Fazer as validações e formatar o retorno de forma correta.

4)

a) 
```typescript
test("one brazilian user allowed", () => {
    const brazilian: User = {
      name: "Marzia",
      age: 27,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Clandestino",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);

    expect(result.brazilians.allowed).toEqual(["Marzia"]);
  });
```

b)
```typescript
test("one american allowed", () => {
    const user: User = {
      name: "Peter",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Clandestino",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);

    expect(result.americans.allowed).toEqual(["Peter"]);
  });
```

c)
```typescript
test("No one allowed", () => {
    const userBr: User = {
      name: "Marzia",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userBr2: User = {
      name: "José",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userUs: User = {
      name: "Peter",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userUs2: User = {
      name: "Charlotte",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Caesars Palace",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [userBr, userBr2, userUs, userUs2]);

    expect(result.brazilians.unallowed).toEqual(["Marzia", "José"]);
    expect(result.americans.unallowed).toEqual(["Peter", "Charlotte"]);
  });
```

d)
```typescript
test("americans allowed, brazilians unallowed", () => {
    const userBr: User = {
      name: "Marzia",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userBr2: User = {
      name: "José",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const userUs: User = {
      name: "Peter",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userUs2: User = {
      name: "Charlotte",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Caesars Palace",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [userBr, userBr2, userUs, userUs2]);

    expect(result.brazilians.unallowed).toEqual(["Marzia", "José"]);
    expect(result.americans.allowed).toEqual(["Peter", "Charlotte"]);
  });
```