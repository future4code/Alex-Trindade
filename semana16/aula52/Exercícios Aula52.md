### Exercício 1

a) O comando remove uma coluna, nesse caso, seria a coluna salary.
b) Troca o nome da coluna gender por sex.
c) Altera a definição de espaço da coluna gender, de 6 caracteres para 255 caracteres.
d)
```sql
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a) 
```sql
UPDATE Actor 
SET 
    name = 'Fernanda Torres',
    birth_date = '1965-09-15'
WHERE
    id = '003';
```
b) Mudança para Juliana Pães:
```sql
UPDATE Actor 
SET 
    name = 'Juliana Pães'
WHERE
    id = '005';
```
Mudança para Juliana Paes:
```sql
UPDATE Actor 
SET 
    name = 'Juliana Paes'
WHERE
    id = '005';
```
c)
```sql
UPDATE Actor 
SET 
    name = 'Nicolas Prattes',
    salary = 20000,
    birth_date = '1997-05-04',
    gender = 'male'
WHERE
    id = '005';
```
d)
```sql
UPDATE Actor 
SET 
    gender = 'gender fluid'
WHERE
    id = '015';
```
Não me retorna nenhuma mensagem de erro, porém não faz nenhuma alteração pois a linha onde deveria estar os dados não foi encontrada.

### Exercício 3

a) 
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```sql
DELETE FROM Actor 
WHERE
    gender = 'male' AND salary > 1000000;
```

### Exercício 4

a) 
```sql
SELECT MAX(salary) FROM Actor;
```
b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = 'female';
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = 'female';
```
d)
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) Ela agrupou por gênero e contou quantos atores e atrizes a tabela possui.
b)
```sql
SELECT 
    id, name
FROM
    Actor
ORDER BY name DESC;
```
c) 
```sql
SELECT 
    *
FROM
    Actor
ORDER BY salary;
```
d)
```sql
SELECT 
    *
FROM
    Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```sql
SELECT 
    AVG(salary), gender
FROM
    Actor
GROUP BY gender;
```

### Exercício 6

a) 
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```sql
UPDATE Movie 
SET 
    playing_limit_date = '2020-08-30'
WHERE
    id = '001';
    
UPDATE Movie 
SET 
    playing_limit_date = '2018-05-03'
WHERE
    id = '004';
```
d)
```sql
DELETE FROM Movie 
WHERE
    id = '004';

UPDATE Movie 
SET 
    synopsis = 'Tres garotas moram em uma casa onde ocorrem várias aventuras'
WHERE
    id = '004';
```
Ele tentou atualizar mas como não encontrou o filme com  id 004, nenhum dado da tabela foi modificado.

### Exercício 7

a)
```sql
SELECT 
    COUNT(rating)
FROM
    Movie
WHERE
    rating > 7.5;
```
b)
```sql
SELECT 
    AVG(rating)
FROM
    Movie;
```

c)
```sql
SELECT 
    COUNT(*)
FROM
    Movie
WHERE
    playing_limit_date > CURDATE();
```
d)
```sql
SELECT 
    COUNT(*)
FROM
    Movie
WHERE
    release_date < CURDATE();
```
e)
```sql
SELECT 
    MAX(rating)
FROM
    Movie;
```
f)
```sql
SELECT 
    MIN(rating)
FROM
    Movie;
```

### Exercício 8

a)
```sql
SELECT 
    *
FROM
    Movie
ORDER BY title;
```
b)
```sql
SELECT 
    *
FROM
    Movie
ORDER BY title DESC
LIMIT 5;
```
c)
```sql
SELECT 
    *
FROM
    Movie
WHERE
    release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```
d)
```sql
SELECT 
    *
FROM
    Movie
ORDER BY rating DESC
LIMIT 3;
```
