import express from 'express'
import {
  getTasks,
  getTaskById,
  deleteTask,
  createTask,
  updateTask,
} from '../controllers/taskControllers.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getTasks)
  .post(protect, checkRoles('Admin', 'Manager'), createTask)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getTaskById)
  .delete(protect, checkRoles('Admin', 'Manager'), deleteTask)
  .put(protect, checkRoles('Admin', 'Manager', 'Employee'), updateTask)

export default router
