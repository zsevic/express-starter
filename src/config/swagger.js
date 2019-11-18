import constants from './constants';
import Pack from '../../package.json';

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
