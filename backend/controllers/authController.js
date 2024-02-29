import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/userModel.js'

const Register = asyncHandler(async (req, res) => {
  const { username, password, firstName, lastName, phoneNumber } = req.body

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password less than 6 characters' })
  }

  const user = await User.findOne({ username })

  if (user) {
    throw new Error('User Already Exist')
  } else {
    const newuser = {
      username,
      password,
      firstName,
      lastName,
      phoneNumber,
    }

    const createdUser = await User.create(newuser)

    res.status(201).json({
      _id: createdUser._id,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.username,
      username: createdUser.username,
    })
  }
})

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.username,
      username: user.username,
      role: user.role,
      token: generateToken(user._id, user.role),
    })
  } else {
    res.status(401)
    throw new Error('User name or Password is Invalid')
  }
})

//helper
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.SECRET, {
    expiresIn: '30d',
  })
}

export { Register, Login }