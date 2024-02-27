import mongoose from 'mongoose'

const { Schema, model } = mongoose

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Employee = model('Employee', employeeSchema)
