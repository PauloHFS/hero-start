# Backend

## Tecnologias

- TypeScript
- JavaScript
- Prisma
- SQLite
- Multer
- Helmet
- Morgan

## Como iniciar

1. Copie e cole o contêudo de .env.example para .env

2. Instale os modulos:

```bash
$ yarn
# or 
$ npm i
```

3. Gere os artefatos do ORM e o banco SQLite:

```bash
$ npx prisma generate
Environment variables loaded from .env
...
```

4. Execute o projeto em mode de desenvolvimento:

```console
$ yarn dev

        🚀 Running on localhost:3333 🚀

```

## Issues

1. Tipagem do model do Prisma não aparecendo no intellisense do VS Code.

Solução: Ctrl + Shift + P e digite TypeScript: Restart TS server
