import express from 'express'
import { Employee } from '../models/employeeModel.js'
import asyncHandler from 'express-async-handler'

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({})

  if (employees) {
    res.status(200).json(employees)
  } else {
    res.status(404)
    throw new Error('Employees not found!')
  }
})

const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {
    res.status(200).json(employee)
  } else {
    res.status(404)
    throw new Error('Employee not found!')
  }
})

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if (employee) {
    await Employee.deleteOne({ _id: req.params.id })
    res.status(200).json(`Employee Deleted!`)
  } else {
    res.status(404)
    throw new Error('Employee Not Found!')
  }
})

const createEmployee = asyncHandler(async (req, res) => {
  const { name, position } = req.body

  try {
    const employee = await Employee.create({
      name,
      position,
    })

    if (employee) {
      res.status(201)
      res.json(employee)
    } else {
      throw new Error('employee not created!')
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
})

const updateEmployee = asyncHandler(async (req, res) => {
  const { name, position } = req.body

  const employee = await Employee.findById(req.params.id)

  if (employee) {
    employee.name = name
    employee.position = position

    const updatedEmployee = await employee.save()
    res.json(updatedEmployee)
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})

export {
  getEmployees,
  getEmployeeById,
  updateEmployee,
  createEmployee,
  deleteEmployee,
}
