import mongoose from 'mongoose'

const { Schema, model } = mongoose

const equipmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    purchase_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export const Equipment = model('Equipment', equipmentSchema)
