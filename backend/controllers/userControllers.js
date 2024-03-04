import { User } from '../models/userModel.js'
import { Role } from '../models/roleModel.js'
import asyncHandler from 'express-async-handler'

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ isActive: true })

  if (users) {
    res.status(200).json(users)
  } else {
    res.status(404)
    throw new Error('Users not found!')
  }
})

const getRoles = asyncHandler(async (req, res) => {
  const roles = await Role.find()

  if (roles) {
    res.status(200).json(roles)
  } else {
    res.status(404)
    throw new Error('Roles not found!')
  }
})

const getRoleById = asyncHandler(async (req, res) => {
  const role = await Role.findById(req.params.id)

  if (role) {
    res.status(200).json(role)
  } else {
    res.status(404)
    throw new Error('Role not found!')
  }
})

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await User.deleteOne({ _id: req.params.id })
    res.status(200).json(`User Deleted!`)
  } else {
    res.status(404)
    throw new Error('User Not Found!')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, role, phoneNumber, isActive } = req.body

  const user = await User.findById(req.params.id)

  if (user) {
    user.firstName = firstName
    user.lastName = lastName
    user.role = role
    user.phoneNumber = phoneNumber
    user.isActive = isActive

    const updateduser = await user.save()
    res.json(updateduser)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
export { getUsers, getUserById, deleteUser, updateUser, getRoles, getRoleById }
