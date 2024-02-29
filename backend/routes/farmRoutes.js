import express from 'express'
import {
  createFarm,
  deleteFarm,
  getFarmById,
  getFarms,
  updateFarm,
} from '../controllers/farmControllers.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getFarms)
  .post(protect, checkRoles('Admin', 'Manager'), createFarm)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getFarmById)
  .delete(protect, checkRoles('Admin'), deleteFarm)
  .put(protect, checkRoles('Admin', 'Manager'), updateFarm)

export default router
