import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

mongoose.connection
  .once('open', () => {
    console.log('Connection with database is established');
  })
  .on('error', (e) => {
    throw e;
  });
