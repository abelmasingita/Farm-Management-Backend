import express from 'express'
import { Farm } from '../models/farmModel.js'
import asyncHandler from 'express-async-handler'

const getFarms = asyncHandler(async (req, res) => {
  const farms = await Farm.find({})

  if (farms) {
    res.status(200).json(farms)
  } else {
    res.status(404)
    throw new Error('Farms not found!')
  }
})

export { getFarms }
