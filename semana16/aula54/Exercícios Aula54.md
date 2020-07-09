### Exercício 1

a) A chave estrangeira estabelece o relacionamento entre as diferentes tabelas. Ela se relaciona com a chame primária, fazendo referência a mesma.

b) 
```sql
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movie (id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
	"Como não amar esses dois? Essa história de trocar de corpo, já é bastante clichê nos filmes 
	americanos, mas o Brasil fez uma adaptação muito boa, Tony Ramos fez um ótimo papel de homem feminino, convenceu 
	bastante. O Filme é bom, o resultado a bilheteria nacional comprova...",
	7,
	"001" 
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
	"O filme tem seus méritos, porém não creio que ele seja digno de tanto alvoroço como estão fazendo por ai.
    É um filme tipicamente Rede Globo, com aquele humorzinho carioca e personagens caricatas., se parece mais 
    com aquelas séries de humor que a Globo faz no fim de ano, sem contar as propagandas que aparecem no filme, 
    o que deixa deixa uma situação muito constrangedora, nota 4.",
	4,
	"002" 
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
	"assisti no corujão na tv globo, já o havia assistido na tv aberta em outra oportunidade, muto bom mesmo, 
    história classica bem produzida e dirigida, atuações convincentes, um bom filme nacional.",
	9.5,
	"003" 
);
```
c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha infantil: uma restrição de chave estrangeira falha. Significa que através da chave estrangeira, não foi possível encontrar o id do filme que foi passado, na  tabela de filmes.
d) 
```sql
ALTER TABLE Movie DROP COLUMN rating;
```
e) Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Não pode excluir pois está associada a outra tabela pela foreign key.

### Exercício 2

a) Ela está relacionada através da foreign key com a tabela de atores e com a tabela de filmes. Ela irá relacionar os atores com os filmes.
b) 
```sql
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id) VALUES("001", "002");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("002", "005");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("003", "004");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("001", "006");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("002", "002");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("003", "004");
```
c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha. Não é possível criar uma relação para itens inexistentes, é feita a busca e como não encontra o id não faz a relação de atores com o filme.

d) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Como já existe uma relação entre o ator e a tabela elenco, não é possível excluir até que se desfaça isso.

### Exercício 3

a) Ela exibe o conteúdo de duas tabelas, movie e rating. O operador ON define o que deve ser exibido, se a condição for atendida.
b) 
```sql
SELECT 
    movie.id AS movie_id,
    movie.title AS title,
    rating.rate AS rating
FROM
    Movie movie
        INNER JOIN
    Rating rating ON movie.id = rating.movie_id;
```

### Exercício 4

a)
```sql
SELECT 
    movie.id AS movie_id,
    movie.title AS title,
    rating.rate AS rating,
    rating.comment AS comment
FROM
    Movie movie
        LEFT JOIN
    Rating rating ON movie.id = rating.movie_id;
```
b)
```sql
SELECT 
    movie.id AS movie_id,
    movie.title AS title,
    movieCast.actor_id AS actor_id
FROM
    Movie movie
        RIGHT JOIN
    MovieCast movieCast ON movieCast.movie_id = movie.id;
```

c) 
```sql
SELECT 
    AVG(rating.rate), movie.id, movie.title
FROM
    Movie movie
        LEFT JOIN
    Rating rating ON movie.id = rating.movie_id
GROUP BY (movie.id);
```
