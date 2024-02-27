import express from 'express'
import {
  getCrops,
  createCrop,
  getCropById,
  deleteCrop,
  updateCrop,
} from '../controllers/cropControllers.js'

const router = express.Router()

router.route('/').get(getCrops).post(createCrop)

router.route('/:id').get(getCropById).delete(deleteCrop).put(updateCrop)

export default router
