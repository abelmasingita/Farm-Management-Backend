import express from 'express'
import {
  getTasks,
  getTaskById,
  deleteTask,
  createTask,
  updateTask,
} from '../controllers/taskControllers.js'

const router = express.Router()

router.route('/').get(getTasks).post(createTask)

router.route('/:id').get(getTaskById).delete(deleteTask).put(updateTask)

export default router
