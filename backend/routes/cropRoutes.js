import express from 'express'
import {
  getCrops,
  createCrop,
  getCropById,
  deleteCrop,
  updateCrop,
} from '../controllers/cropControllers.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getCrops)
  .post(protect, checkRoles('Admin', 'Manager'), createCrop)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getCropById)
  .delete(protect, checkRoles('Admin', 'Manager'), deleteCrop)
  .put(protect, checkRoles('Admin'), updateCrop)

export default router
