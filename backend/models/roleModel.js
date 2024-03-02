import mongoose from 'mongoose'

const { Schema, model } = mongoose

const roleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Role = model('Role', roleSchema)
