import express from 'express'
import { Task } from '../models/taskModel.js'
import asyncHandler from 'express-async-handler'

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({})

  if (tasks) {
    res.status(200).json(tasks)
  } else {
    res.status(404)
    throw new Error('Tasks not found!')
  }
})

const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (task) {
    res.status(200).json(task)
  } else {
    res.status(404)
    throw new Error('Task not found!')
  }
})

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (task) {
    await task.deleteOne({ _id: req.params.id })
    res.status(200).json(`Task Deleted!`)
  } else {
    res.status(404)
    throw new Error('Task Not Found!')
  }
})

const createTask = asyncHandler(async (req, res) => {
  const { name, description, status, task_date, field_id, employee_id } =
    req.body

  try {
    const task = await Task.create({
      name,
      description,
      status,
      task_date,
      field_id,
      employee_id,
    })

    if (task) {
      res.status(201)
      res.json(task)
    } else {
      throw new Error('Task not created!')
    }
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
})

const updateTask = asyncHandler(async (req, res) => {
  const { name, description, status, task_date, field_id, employee_id } =
    req.body

  const task = await Task.findById(req.params.id)

  if (task) {
    task.name = name
    task.description = description
    task.status = status
    task.task_date = task_date
    task.field_id = field_id
    task.employee_id = employee_id

    const updatedtask = await Task.save()
    res.json(updatedtask)
  } else {
    res.status(404)
    throw new Error('Task not found')
  }
})
export { getTasks, getTaskById, deleteTask, createTask, updateTask }
