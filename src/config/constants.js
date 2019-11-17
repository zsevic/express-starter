import 'dotenv/config';

const config = {
  MONGODB_URL:
    process.env.MONGODB_URI || process.env.MONGODB_URL || 'mongodb://localhost:27017/express-starter-db',
  PORT: process.env.PORT || 8080,
};

export default config;
