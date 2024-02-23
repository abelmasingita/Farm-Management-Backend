import dotenv from 'dotenv'
import express from 'express'
import farmRoutes from './routes/farmRoutes.js'
import fieldRoutes from './routes/fieldRoutes.js'
import connectDB from './config/db.js'
import { deleteData, importData } from './seeder.js'

//Config
dotenv.config()
const app = express()
app.use(express.json())
connectDB()

const mode = process.env.mode
const port = process.env.PORT || 5000

//Seeder code
importData()
//deleteData()

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
