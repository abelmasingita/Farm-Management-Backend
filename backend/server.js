import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import { importData, deleteData } from './seeder.js'
import farmRoutes from './routes/farmRoutes.js'
import fieldRoutes from './routes/fieldRoutes.js'

//Config
dotenv.config()
const app = express()
app.use(express.json())
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

//Listener
app.listen(port, () => {
  console.log(`Backend Application Running in Port ${port} on ${mode} mode`)
})