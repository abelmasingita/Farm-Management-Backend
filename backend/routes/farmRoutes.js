import express from 'express'
import {
  createFarm,
  deleteFarm,
  getFarmId,
  getFarms,
  updateFarm,
} from '../controllers/farmControllers.js'

const router = express.Router()

router.route('/').get(getFarms).post(createFarm)

router.route('/:id').get(getFarmId).delete(deleteFarm).put(updateFarm)

export default router
