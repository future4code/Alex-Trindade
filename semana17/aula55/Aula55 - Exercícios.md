### Exercício 1

a) Acho melhor usar strings pois pode ser utilizados caracteres além de números, o que permite um número de combinação bem maior, apesar de os números serem infinitos, ficaria cada vez maior o tamanho do id.
b) 
```typescript
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```

### Exercício 2
a) Trata-se da criação de um usuário na tabela existente chamada "User". Através do knex, o código faz a conexão com o banco de dados. Através da função "createUser" é inserido na tabela um novo usuário com um id, um e-mail e uma senha.

b)
```typescript
  public async createTable(tableName: string): Promise<any> {
    try {
      await this.connection.raw(`
            CREATE TABLE ${tableName} (
                id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);
      console.log("Tabela criada com sucesso.");
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
```

c)
```typescript
import knex from "knex";

export class UserDatabase {
  private static TABLE_NAME = "User";

  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });
  
  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<any> {
    try {
      await this.connection
        .insert({
          id,
          email,
          password,
        })
        .into(UserDatabase.TABLE_NAME);
      console.log("Usuário Criado com sucesso.");
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
```
d)
```typescript
new UserDatabase().createUser("12345", "marcinha@hotmail.com", "12345");
```

### Exercício 3

a) Faz a conversão do que retorna no jwt para string. Porque estamos usando strings para as informações, se não converter dá erro.

b) 
```typescript
import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "2min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }
}

interface AuthenticationData {
  id: string;
}
```

### Exercício 4

a, b e c)

```typescript
app.post("/signup", async (req: Request, res: Response) => {
  try {
    //B - Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido.");
    }

    //C - Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha Inválida.");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = new IdGenerator().generate();

    await new UserDatabase().createUser(id, userData.email, userData.password);

    const token = new Authenticator().generateToken({ id });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
```