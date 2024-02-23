import express from 'express'
import { Field } from '../models/fieldModel.js'
import asyncHandler from 'express-async-handler'

const getField = asyncHandler(async (req, res) => {
  const fields = await Field.find({})

  if (fields) {
    res.status(200).json(fields)
  } else {
    res.status(404)
    throw new Error('Fields not found!')
  }
})

export { getField }
