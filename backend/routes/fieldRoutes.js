import express from 'express'
import {
  createField,
  deleteField,
  getFieldById,
  getFields,
  updateField,
} from '../controllers/fieldControllers.js'

const router = express.Router()

router.route('/').get(getFields).post(createField)

router.route('/:id').get(getFieldById).delete(deleteField).put(updateField)
export default router
