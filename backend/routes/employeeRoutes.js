import express from 'express'
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeControllers.js'

const router = express.Router()

router.route('/').get(getEmployees).post(createEmployee)

router
  .route('/:id')
  .get(getEmployeeById)
  .delete(deleteEmployee)
  .put(updateEmployee)

export default router
