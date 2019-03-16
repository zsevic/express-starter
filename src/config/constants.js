import 'dotenv/config'

const config = {
  MONGODB_URL:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/express-starter-db'
}

export default config
