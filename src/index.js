/* eslint-disable import/first, import/order */
import './tracing.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import registerApiDocs from 'express-swagger-generator';
import 'dotenv/config';
import './config/database.js';
import apiRoutes from './api/index.js';
import constants from './config/constants.js';
import { options } from './config/swagger.js';
import { logger } from './utils/logger.js';

const app = express();
const { PORT } = constants;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
registerApiDocs(app)(options);

app.get('/', (_, res) => {
  res.end('Hello from express-starter');
});
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
