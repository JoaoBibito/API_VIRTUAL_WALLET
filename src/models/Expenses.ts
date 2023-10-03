import mongoose, { ObjectId } from "mongoose";
import { type } from "os";

export interface IExpense {
  value: number,
  name: string,
  type: string,
  createdAt: Date,
  userId: string
}

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})
const Expense = mongoose.model("Expense", ExpenseSchema)
export default Expense