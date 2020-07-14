### Exercício 1

a) `salt` é uma string aleatória na senha ou texto que evita ataques do tipo rainbow table. `round` é o mesmo que o `cost`, que está relacionado à segurança da senha. Quanto maior o cost, maior o tempo de execução do algoritmo. O melhor cost para se usar depende do sistema, mas o mais utilizado é de 12, um padrão na maioria das libs.

b - c)
```typescript
import * as bcrypt from "bcryptjs";

export default class HashManager {
  public async hash(text: string): Promise<string> {
    const rounds = 12;
    const salt = await bcrypt.genSalt(rounds);
    const cipherText = await bcrypt.hash(text, salt);
    return cipherText;
  }

  public async compare(text: string, cipherText: string): Promise<boolean> {
    const result = await bcrypt.compare(text, cipherText);
    return result;
  }
}
```

### Exercício 2

a) Primeiro deve-se modificar o cadastro, pois os usuários cadastrados anteriormente não possuem senha criptografada, então a comparação feita no login ficaria incorreta.

b)
```typescript
app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const hashManager = new HashManager();
    const cipherText = await hashManager.hash(userData.password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cipherText);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

c)
```typescript
app.post("/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

d) Não, pois acessamos quando já estamos logados, utilizando apenas o token.

### Exercício 3

a) 
```sql
ALTER TABLE User ADD COLUMN role ENUM ("NORMAL", "ADMIN") DEFAULT "NORMAL";
```

b)
```typescript
import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role: string;
}
```

c)
```typescript
app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const hashManager = new HashManager();
    const cipherText = await hashManager.hash(userData.password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cipherText);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

d)
```typescript
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 4

a)
```typescript
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5

```typescript
public async deleteUser(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
    await BaseDatabase.destroyConnection();
  }
```
```typescript
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```