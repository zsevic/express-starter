# express-starter

> Minimal Express boilerplate

### Setup

```bash
git clone https://github.com/zsevic/express-starter
cd express-starter
cp .env.sample .env # change values
npm i
mongod --dbpath=mongodb/data
npm run dev
```

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Testing

```bash
npm test
```

### API documentation

Generated at `/api-docs` endpoint using [express-swagger-generator](https://www.npmjs.com/package/express-swagger-generator) plugin

### Technologies used

- Node.js, Express, MongoDB
