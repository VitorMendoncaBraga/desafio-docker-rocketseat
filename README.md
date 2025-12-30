# Desafio Docker Rocketseat

Este é um projeto de desafio da Rocketseat para construir uma API de gerenciamento de usuários utilizando Docker, Node.js, TypeScript, Express, Drizzle ORM e PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Express**: Framework web para Node.js.
- **Drizzle ORM**: ORM para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Zod**: Biblioteca para validação de esquemas.
- **Docker**: Containerização da aplicação.
- **Docker Compose**: Orquestração de containers.

## Pré-requisitos

- Docker
- Docker Compose

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd desafio-docker-rocketseat
   ```

2. Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

3. Preencha as variáveis de ambiente no arquivo `.env` com os valores apropriados (usuário, senha, nome do banco, etc.).

4. Execute os containers:
   ```bash
   docker-compose up --build
   ```

A API estará disponível em `http://localhost:3001`.

## Estrutura do Projeto

- `src/app.ts`: Configuração principal da aplicação Express.
- `src/server.ts`: Ponto de entrada do servidor.
- `src/routes/`: Definição das rotas da API.
- `src/controllers/`: Controladores para manipulação de requisições.
- `src/use-cases/`: Casos de uso da aplicação.
- `src/entities/`: Entidades de domínio (ex: User).
- `src/repository/`: Repositórios para acesso aos dados.
- `src/db/`: Configuração do banco de dados e esquemas.
- `src/env/`: Validação das variáveis de ambiente.

## API Endpoints

### Criar Usuário
- **POST** `/users`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome do Usuário",
    "age": 25,
    "email": "usuario@example.com"
  }
  ```
- **Resposta de Sucesso** (201):
  ```json
  {
    "id": "uuid-gerado",
    "name": "Nome do Usuário",
    "age": 25,
    "email": "usuario@example.com"
  }
  ```

## Scripts Disponíveis

- `npm run dev`: Executa o servidor em modo de desenvolvimento com TSX.
- `npm run build`: Compila o TypeScript para JavaScript.
- `npm start`: Executa o servidor compilado.

## Licença

Este projeto está sob a licença ISC.