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

const getFarmById = asyncHandler(async (req, res) => {
  const farm = await Farm.findById(req.params.id)

  if (farm) {
    res.status(200).json(farm)
  } else {
    res.status(404)
    throw new Error('Farm not found!')
  }
})

const deleteFarm = asyncHandler(async (req, res) => {
  const farm = await Farm.findById(req.params.id)

  if (farm) {
    await Farm.deleteOne({ _id: req.params.id })
    res.status(200).json(`Farm Deleted!`)
  } else {
    res.status(404)
    throw new Error('Farm Not Found!')
  }
})

const createFarm = asyncHandler(async (req, res) => {
  const { name, location, size, owner, contactInformation } = req.body

  try {
    const farm = await Farm.create({
      name: name,
      location: location,
      size: size,
      owner: owner,
      contactInformation: contactInformation,
    })

    if (farm) {
      res.status(201)
      res.json(farm)
    } else {
      throw new Error('Farm not created!')
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
})

const updateFarm = asyncHandler(async (req, res) => {
  const { name, location, size, owner, contactInformation } = req.body

  const farm = await Farm.findById(req.params.id)

  if (farm) {
    ;(farm.name = name),
      (farm.size = size),
      (farm.location = location),
      (farm.owner = owner),
      (farm.contactInformation = contactInformation)

    const updatedFarm = await farm.save()
    res.json(updatedFarm)
  } else {
    res.status(404)
    throw new Error('Farm not found')
  }
})
export { getFarms, getFarmById, deleteFarm, createFarm, updateFarm }
