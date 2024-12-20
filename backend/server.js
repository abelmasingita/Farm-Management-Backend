import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
//import { importData, deleteData } from './seeder.js'
import {
  farmRoutes,
  fieldRoutes,
  cropRoutes,
  employeeRoutes,
  taskRoutes,
  authRoutes,
  userRoutes,
} from './routes/index.js'

import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorHandler.js'

//Config
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
  origin: true,
  credentials: true,
}

app.use(cors(corsOptions))

connectDB()

const mode = process.env.mode
const port = process.env.PORT || 3000

//Seeder code
//importData()
//deleteData()

//routes
app.get('/', (req, res) => {
  res.send('Backend Running!')
})

//Middleware
app.use('/api/farm', farmRoutes)
app.use('/api/field', fieldRoutes)
app.use('/api/crop', cropRoutes)
app.use('/api/employee', employeeRoutes)
app.use('/api/task', taskRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

//error handler
app.use(notFound)
app.use(errorHandler)

//Listener
app.listen(port, () => {
  console.log(`Backend Application Running in Port ${port} on ${mode} mode`)
})