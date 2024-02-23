import mongoose from 'mongoose'

const { Schema, model } = mongoose

const farmSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
      default: 0,
    },
    owner: {
      type: String,
      required: true,
    },
    contactInformation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Farm = model('Farm', farmSchema)
