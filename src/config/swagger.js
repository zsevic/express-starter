import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import constants from './constants.js';

const fileUrl = new URL('../../package.json', import.meta.url);
const Pack = JSON.parse(await readFile(fileUrl, 'utf8'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {
  swaggerDefinition: {
    info: {
      title: `${Pack.name} API documentation`,
      version: Pack.version,
    },
    host: `localhost:${constants.PORT}`,
    basePath: '/api',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },
  basedir: __dirname,
  files: ['../api/**/*.routes.js'],
};
