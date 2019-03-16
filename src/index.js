import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './config/database'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end('Hello from express-starter')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
