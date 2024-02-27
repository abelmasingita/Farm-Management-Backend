import express from 'express'
import {
  createFarm,
  deleteFarm,
  getFarmById,
  getFarms,
  updateFarm,
} from '../controllers/farmControllers.js'

const router = express.Router()

router.route('/').get(getFarms).post(createFarm)

router.route('/:id').get(getFarmById).delete(deleteFarm).put(updateFarm)

export default router
