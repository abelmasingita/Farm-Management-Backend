import express from 'express'
import { getField } from '../controllers/fieldControllers.js'

const router = express.Router()

router.route('/').get(getField)

export default router
