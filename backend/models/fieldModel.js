import mongoose from 'mongoose'

const { Schema, model } = mongoose

let Field

if (mongoose.models.Field) {
  Field = mongoose.model('Field')
} else {
  const fieldSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      cropType: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        required: true,
        default: 0,
      },
      soilType: {
        type: String,
        required: true,
      },
      irrigationMethod: {
        type: String,
        required: true,
      },
      farmId: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
      },
    },
    {
      timestamps: true,
    }
  )

  Field = model('Field', fieldSchema)
}

export { Field }
