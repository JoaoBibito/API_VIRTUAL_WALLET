import { ObjectId } from "mongoose"
import { IExpense } from "../models/Expenses.ts"
import { createExpenseRepository } from "../repositories/expense.repository.ts"

export const createExpenseService = async (body: IExpense, userId: string) => {
  const {
    name,
    value,
    type } = body

  if (!name || !value || !type) throw new Error("Input all fields")

  if (type.toLocaleLowerCase() !== "expense" && type.toLocaleLowerCase() !== "revenue") throw new Error("Type of expense is not valid.")

  const newExpanse: IExpense = {
    name,
    value,
    type,
    userId,
    createdAt: new Date()
  }

  const expenseCreated = await createExpenseRepository(newExpanse);

  if (!expenseCreated) throw new Error("Error to creating expense")

  return expenseCreated;

}
export const getExpensesService = () => {

}