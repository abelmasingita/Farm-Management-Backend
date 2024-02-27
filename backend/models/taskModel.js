import mongoose from 'mongoose'

const { Schema, model } = mongoose

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    task_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    field_id: {
      type: Schema.Types.ObjectId,
      ref: 'Field',
    },
    employee_id: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
  },
  {
    timestamps: true,
  }
)

export const Task = model('Task', taskSchema)
