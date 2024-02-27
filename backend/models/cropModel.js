import mongoose from 'mongoose'

const { Schema, model } = mongoose

const cropSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    variety: {
      type: String,
      required: true,
    },
    planting_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    harvest_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

export const Crop = model('Crop', cropSchema)
