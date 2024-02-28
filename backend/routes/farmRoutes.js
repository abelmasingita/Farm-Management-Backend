import express from 'express'
import {
  createFarm,
  deleteFarm,
  getFarmById,
  getFarms,
  updateFarm,
} from '../controllers/farmControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getFarms).post(protect, admin, createFarm)

router.route('/:id').get(getFarmById).delete(deleteFarm).put(updateFarm)

export default router
