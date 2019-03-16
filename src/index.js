import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import constants from './constants'

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

try {
  mongoose.connect(
    constants.MONGODB_URL,
    { useNewUrlParser: true }
  )
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL)
}

mongoose.connection
  .once('open', () => {
    console.log('Connection with database is established')
  })
  .on('error', e => {
    throw e
  })

app.get('/', (req, res) => {
  res.end('Hello from express-starter')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
