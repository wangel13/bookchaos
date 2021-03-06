[![BookChaos](./bookchaos_logo.png)](https://bookchaos.com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/wangel13/bookchaos) 

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## First steps

Up local postgres by `docker-compose`, setup [`.env`](#env) and start `dev` server

```
npm i
npm run dev
```

## Migrations

```
// modify schema && make migrations
npx prisma migrate save --name init --experimental
npx prisma migrate up --experimental
// generate client
npm run generate
```

## Prisma studio

Open prisma studio interface

```
npm run studio
```

## ENV

Use `.env.local` on production or `.env.development` on dev. [Read more](https://nextjs.org/docs/basic-features/environment-variables)

```
TOKEN_SECRET="this-is-a-secret-value-with-at-least-32-characters"
DATABASE_URL="postgresql://postgres:example@localhost:5432/prisma?schema=public"
```
