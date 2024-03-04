import { User } from '../models/userModel.js'
import { Role } from '../models/roleModel.js'
import asyncHandler from 'express-async-handler'
import { jwtDecode } from 'jwt-decode'

export const protect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization) {
    try {
      token = req.headers.authorization
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
  return asyncHandler(async (req, res, next) => {
    const role = await Role.findById(req.user.roleId)

    if (req.user && roles.includes(role.name)) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized to access this resource')
    }
  })
}