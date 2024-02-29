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

export const checkRoles = (...roles) => {
  return asyncHandler((req, res, next) => {
    if (req.user && roles.includes(req.user.role)) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized to access this resource')
    }
  })
}