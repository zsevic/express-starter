import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

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
