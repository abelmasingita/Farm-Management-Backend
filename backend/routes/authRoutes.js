import express from 'express'
import { Login, Register } from '../controllers/authController.js'
import { checkRoles, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/register').post(protect, checkRoles('Admin'), Register)
router.route('/login').post(Login)

export default router
