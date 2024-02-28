import { User } from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { jwtDecode } from 'jwt-decode'

export const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[2]

      const decoded = jwtDecode(token)

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not Authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, token not provided')
  }
})

export const admin = asyncHandler((req, res, next) => {
  if (req.user && req.user.role === 'Admin') {
    next()
  } else {
    res.status(401)
    throw new Error('Do not have neccessary Permissions of an Admin')
  }
})
export const mananger = asyncHandler((req, res, next) => {
  if (req.user && req.user.role === 'Manager') {
    next()
  } else {
    res.status(401)
    throw new Error('Do not have neccessary Permissions of a Manager')
  }
})
export const employee = asyncHandler((req, res, next) => {
  if (req.user && req.user.role === 'Employee') {
    next()
  } else {
    res.status(401)
    throw new Error('Do not have neccessary Permissions of an Employee')
  }
})
export const guest = asyncHandler((req, res, next) => {
  if (req.user && req.user.role === 'Guest') {
    next()
  } else {
    res.status(401)
    throw new Error('Do not have neccessary Permissions of a Guest')
  }
})
