import express from 'express'
import { Crop } from '../models/cropModel.js'
import asyncHandler from 'express-async-handler'

const getCrops = asyncHandler(async (req, res) => {
  const crops = await Crop.find({})

  if (crops) {
    res.status(200).json(crops)
  } else {
    res.status(404)
    throw new Error('Crops not found!')
  }
})

const getCropById = asyncHandler(async (req, res) => {
  const crop = await Crop.findById(req.params.id)

  if (crop) {
    res.status(200).json(crop)
  } else {
    res.status(404)
    throw new Error('Crop not found!')
  }
})

const deleteCrop = asyncHandler(async (req, res) => {
  const crop = await Crop.findById(req.params.id)

  if (crop) {
    await Crop.deleteOne({ _id: req.params.id })
    res.status(200).json(`Crop Deleted!`)
  } else {
    res.status(404)
    throw new Error('Crop Not Found!')
  }
})

const createCrop = asyncHandler(async (req, res) => {
  const { name, variety, planting_date, harvest_date } = req.body

  try {
    const crop = await Crop.create({
      name,
      variety,
      planting_date,
      harvest_date,
    })

    if (crop) {
      res.status(201)
      res.json(Crop)
    } else {
      throw new Error('Crop not created!')
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
})

const updateCrop = asyncHandler(async (req, res) => {
  const { name, variety, planting_date, harvest_date } = req.body

  const crop = await Crop.findById(req.params.id)

  if (crop) {
    crop.name = name
    crop.variety = variety
    crop.planting_date = planting_date
    crop.harvest_date = harvest_date

    const updatedCrop = await crop.save()
    res.json(updatedCrop)
  } else {
    res.status(404)
    throw new Error('Crop not found')
  }
})
export { getCrops, getCropById, deleteCrop, createCrop, updateCrop }
