import mongoose from 'mongoose';
import constants from './constants.js';
import { logger } from '../utils/logger.js';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

mongoose.connection
  .once('open', () => {
    logger.info('Connection with database is established');
  })
  .on('close', () => {
    logger.info('Connection with database is closed');
  })
  .on('error', (error) => {
    logger.error(error);
    throw error;
  });
