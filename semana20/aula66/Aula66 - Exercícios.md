### Exercício 1

Achei um pouco chato configurar o sql, o tutorial não era muito explicativo e surgiram dúvidas, que foram sanadas no canal de dúvidas. A parte que fiquei mais confuso foi o passo 2
```
UPDATE mysql.user 
SET Host='%' 
WHERE Host='localhost' AND User='O_SEU_USUARIO_AQUI';

FLUSH PRIVILEGES;
```

onde não retornava nada após colocar flush privileges, estou em dúvida ainda se funcionou corretamente.

### Exercício 2

1. Primeiro conectaria com a máquina remota, criaria uma pasta e dentro dela clonaria o repositório ou copiaria do computador local para lá (não sei se isso é possível.).

2. Projeto julian-4eddit15

3. 
```
ssh -i "lockpick.pem" ubuntu@ec2-54-167-182-34.compute-1.amazonaws.com
```

4. 
```
git clone https://github.com/future4code/julian-4eddit15.git
cd julian-4eddit15/4eddit
npm install
npm run start
```
git clone para clonar o repositório na pasta local.
cd para entrar na pasta do projeto
na pasta do projeto em que haja o arquivo package.json, deve-se rodar o comando npm install para instalar as dependências do projeto.
Por fim, usar npm run start para o projeto rodar.

5. Para configurar a porta selecionamos a máquina no console da amazon EC2, em security goups clicamos em launch-wizard-1, depois em inbound rules e em edit inbound roules. Após isso, clicamos em Add rule e editamos a porta e colocamos na coluna source a opção anywhere. Feito isto, é só clicar em Save rules.

6. Primeiro, deve-se configurar a porta 80 igual ao passo anterior. Depois, na pasta do seu projeto no terminal, use o comando ``npm run build`` para criar uma build do seu projeto. Após esse passo, navegue para a pasta build através do comando ``cd build/``, e rode o comando ``sudo apt update`` e ``sudo apt install python`` para instalar o python. Por fim, deve-se rodar o comando ``sudo python -mSimpleHTTPServer 80`` para que a aplicação rode direto na porta 80, sem a necessidade de especificar a porta desejada.

7. Semelhanças: Acessar a máquina é igual o visto na aula; configurar as portas necessárias; rodar o npm start e rodar a build na porta 80. Diferenças: Clonar o repositório; fazer o npm install.