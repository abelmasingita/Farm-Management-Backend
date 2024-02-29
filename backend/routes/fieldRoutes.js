import express from 'express'
import {
  createField,
  deleteField,
  getFieldById,
  getFields,
  updateField,
} from '../controllers/fieldControllers.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getFields)
  .post(protect, checkRoles('Admin', 'Manager'), createField)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getFieldById)
  .delete(protect, checkRoles('Admin'), deleteField)
  .put(protect, checkRoles('Admin', 'Manager'), updateField)
export default router
