
# Trybe Smith

O programa cria uma API básica de CRUD podendo então listar, adicionar, atualizar e remover produtos e pedidos. Para algumas funcionalidades da API Trybe Smith é necessário fazer login que retorna um token. 




## Tecnologias
As principais tecnologias utilizadas foram:

- Node.js: 16.14.0
- Express: 4.17.13
- Mysql2: 2.3.0
- Jsonwebtoken: 8.5.1
- Dotenv: 10.0.0
- Typescript: 4.4.3

Mais informações estão presentes no package.json.


## Rodando Localmente

Clone o projeto

```bash
  git clone git@github.com:leoblima/trybe-smith.git
```

Vá ao diretório do projeto

```bash
  cd trybe-smith
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

mais funcionalidades podem ser encontradas no package.json. Lá estão disponíveis comandos para rodar o lint e restaurar a base de dados.
## Referência para a API 

#### Adiciona novo produto

```http
  POST /products
```
O endpoint deve receber no body a seguinte estrutura:

```json
  {
   "name": "string",
   "amount": "string"
  }
```

#### Listar todos os produtos

```http
  GET /products
```
Retorna um array com todos os produtos cadastrados como exemplo a seguir:
```json
[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]
```

#### Cadastra nova pessoa usuária

```http
  POST /users
```
O endpoint deve receber no body a seguinte estrutura:

```json
  {
  "username": "string",
  "classe": "string",
  "level": 10, //number
  "password": "string"
  }
```
E retorna um objeto com o token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#### Lista todos os pedidos

```http
  POST /orders
```
Retorna um array com todos os pedidos cadastrados como exemplo a seguir:

```json
  [
    {
      "id": 1,
      "userId": 2,
      "productsIds": [1, 2]
    },
    {
      "id": 2,
      "userId": 2,
      "productsIds": [3, 4]
    }
  ]
```

#### Endpoint para login de usuário

```http
  POST /login
```

O endpoint deve receber no body a seguinte estrutura:

```json
  {
    "username": "string",
    "password": "string"
  }
```

Caso o login seja efetuado com sucesso, retorna um objeto com o token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
