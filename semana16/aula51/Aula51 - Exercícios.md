### Exercício 1

a)
* `VARCHAR(255)`: Indica a criação de uma string e o valor "255" é o espaço alcado para ela;
* `PRIMARY KEY`: Toda tabela deve possuir uma coluna de chave primária, que é um identificador único de cada item. Os valores contidos nessa coluna não podem ser repetidos;
* `NOT NULL`: É onde fica explícito que nesse local deve ser recebido um valor, não pode estar vazio.

b)
* `SHOW DATABASES`: Exibe todos os bancos de dados criados até o momento;
* `SHOW TABLES`: Exibe as tabelas criadas no banco de dados atual.

c) Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Actor' at line 1
O erro acima fala sobre minha sintaxe, que está incorreta. Para verificar a estrutura da tabela Actor, deve ser usado `DESCRIBE Actor`.

### Exercício 2
a) Não é possível adicinar Tony Ramos e Glória Pires pois estou passando uma quantidade de colunas com 4 itens e uma quantidade de valores com 5 itens.

b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'. O erro ocorreu pois uma chave primária não pode se repetir.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1. Estou passando um número menor de colunas e um número maior de valores. O código correto é:

~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
~~~

Código de erro: 1364. O campo 'name' não tem um valor padrão. Acontece quando o campo nome não possui um valor, é nulo. O correto seria: 

~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Avan Jogia",
  400000,
  "1949-04-18", 
  "male"
);
~~~

Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'data_de_natalidade' na linha 1. Data em formato incorreto. Faltam aspas. O Correto seria:

~~~
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~

### Exercício 3

a) 
~~~
SELECT * FROM Actor WHERE gender = "female";
~~~

b)
~~~
SELECT salary FROM Actor WHERE name = "Tony Ramos";
~~~

c) Não retornou nenhuma linha pois não existe gender com valor "invalid".

d)
~~~
SELECT id, name, salary FROM Actor WHERE salary >= 500000;
~~~

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. O nome da coluna está incorreto. O correto é: 
~~~
SELECT id, name from Actor WHERE id = "002"
~~~

### Exercício 4

a) Está selecionando todos os atore em que o nome comece com a letra A ou J e o salário deve ser maior que R$ 300.000.

b) 
~~~
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
~~~

C) 
~~~
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
~~~

d) 
~~~
SELECT 
    *
FROM
    Actor
WHERE
    (name LIKE '%G%' OR name LIKE '%g%'
        OR name LIKE '%A%'
        OR name LIKE '%a%')
        AND salary > 350000;
~~~

### Exercício 5

a) Criei uma tabela com os filmes. Ela possui 5 colunas, nenhuma pode ser vazia.

~~~
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
~~~

b)
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
~~~

c) 
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
~~~

d)
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho,
  que só quer saber de farras e jogatina nas boates. 
  A vida de abusos acaba por acarretar sua morte precoce.", 
  "2017-11-02",
  8
);
~~~

e)
~~~
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no 
    Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão 
    guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)
~~~

### Exercício 6

a) 
~~~
SELECT id, title, rating FROM Movie WHERE id = "004";
~~~

b)
~~~
SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";
~~~

c) 
~~~
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
~~~

### Exercício 7

a)
~~~
SELECT * FROM Movie WHERE title LIKE "%vida%";
~~~

b)
~~~
SELECT * FROM Movie WHERE title LIKE "%você%" OR synopsis LIKE "%Flor%";
~~~

c)
~~~
SELECT * FROM Movie WHERE release_date < "2020-07-06";
~~~

d)
~~~
SELECT 
    *
FROM
    Movie
WHERE
    release_date < CURRENT_DATE()
        AND (title LIKE '%Flor%'
        OR synopsis LIKE '%casar%')
        AND rating > 7;
~~~