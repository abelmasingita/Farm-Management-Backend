import express from 'express'
import { getFarms } from '../controllers/farmControllers.js'

const router = express.Router()

router.route('/').get(getFarms)

export default router
