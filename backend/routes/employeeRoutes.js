import express from 'express'
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeControllers.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getEmployees)
  .post(protect, checkRoles('Admin', 'Manager'), createEmployee)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getEmployeeById)
  .delete(protect, checkRoles('Admin'), deleteEmployee)
  .put(protect, checkRoles('Admin', 'Manager'), updateEmployee)

export default router
