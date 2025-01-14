import express from 'express'
import catsRouter from './routes/cats/index.js'
import sequelize from './providers/db.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
app.use('/cats', catsRouter)

app.listen(process.env.PORT, () => {
  sequelize // to not delete after compilation
  console.log(`Listening on port ${process.env.PORT}`)
})

