import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    firstName: {
      type: String,
      unique: false,
      required: true,
    },
    lastName: {
      type: String,
      unique: false,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    isActive: {
      type: String,
      default: true,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export const User = model('User', userSchema)
