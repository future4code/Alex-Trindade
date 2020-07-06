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





















