import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)

app.use(routes)
app.listen(process.env.PORT || 1234, () => {
  console.log('server running on port 1234')
})
