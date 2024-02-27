import mongoose from 'mongoose'

const { Schema, model } = mongoose

const expenseSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    expense_date: {
      type: Date,
      required: true,
      default: Date.now,
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

export const Expense = model('Expense', expenseSchema)
