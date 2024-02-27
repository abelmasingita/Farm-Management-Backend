import express from 'express'
import { Field } from '../models/fieldModel.js'
import asyncHandler from 'express-async-handler'

const getFields = asyncHandler(async (req, res) => {
  const fields = await Field.find({})

  if (fields) {
    res.status(200).json(fields)
  } else {
    res.status(404)
    throw new Error('Fields not found!')
  }
})

const getFieldById = asyncHandler(async (req, res) => {
  const field = await Field.findById(req.params.id)

  if (field) {
    res.status(200).json(field)
  } else {
    res.status(404)
    throw new Error('Field not found!')
  }
})

const deleteField = asyncHandler(async (req, res) => {
  const field = await Field.findById(req.params.id)

  console.log('Field :: ', field)
  if (field) {
    await Field.deleteOne({ _id: req.params.id })
    res.status(200).json(`Field Deleted!`)
  } else {
    res.status(404)
    throw new Error('Field Not Found!')
  }
})

const createField = asyncHandler(async (req, res) => {
  const { name, size, cropType, soilType, irrigationMethod, farmId } = req.body

  try {
    const field = await Field.create({
      name,
      size,
      farmId,
      cropType,
      soilType,
      irrigationMethod,
    })

    if (field) {
      res.status(201)
      res.json(field)
    } else {
      throw new Error('Field not created!')
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
})

const updateField = asyncHandler(async (req, res) => {
  const { name, size, cropType, soilType, irrigationMethod, farmId } = req.body

  const field = await Field.findById(req.params.id)

  if (field) {
    field.name = name
    field.size = size
    field.cropType = cropType
    field.soilType = soilType
    field.irrigationMethod = irrigationMethod
    field.farmId = farmId

    const updatedField = await field.save()
    res.json(updatedField)
  } else {
    res.status(404)
    throw new Error('Field not found')
  }
})

export { getFields, getFieldById, updateField, createField, deleteField }
