import express from 'express'
import { checkRoles, protect } from '../middleware/authMiddleware.js'
import {
  deleteUser,
  getRoleById,
  getRoles,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/userControllers.js'

const router = express.Router()

router
  .route('/')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getUsers)

router.route('/role').get(protect, getRoles)
router.route('/role/:id').get(protect, getRoleById)

router
  .route('/:id')
  .get(protect, checkRoles('Admin', 'Manager', 'Employee'), getUserById)
  .delete(protect, checkRoles('Admin', 'Manager'), deleteUser)
  .put(protect, checkRoles('Admin', 'Manager'), updateUser)

export default router
