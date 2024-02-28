import express from 'express'
import {
  getTasks,
  getTaskById,
  deleteTask,
  createTask,
  updateTask,
} from '../controllers/taskControllers.js'
import { admin, mananger, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getTasks).post(protect, createTask)

router
  .route('/:id')
  .get(protect, getTaskById)
  .delete(protect, admin, deleteTask)
  .put(protect, updateTask)

export default router
