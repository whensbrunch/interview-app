# App Backend

Backend consists of a graphql API server and a prisma data model.

It may be helpful to install prisma2 globally
```
npm install -g prisma2
```
so you can use the `prisma2` cli. Please see the documentation [here](https://github.com/prisma/prisma2/blob/master/docs/prisma2-cli.md).

Once the backend is running locally (e.g. in docker compose), you can generate an initial migration
```
prisma2 migrate save --name 'init' --experimental
```
and then apply it
```
npx prisma2 migrate up --experimental
```
Next, you can seed the database
```
npm run seed
```



## Generating clients

To generate nexus run
```
npm run generate:nexus
```
To generate prisma client, run
```
npm run generate:prisma
```
To generate both run
```
npm run generate
```