import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import './config/database'
import apiRoutes from './api'
import constants from './config/constants'

const app = express()
const PORT = constants.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.end('Hello from express-starter')
})
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
