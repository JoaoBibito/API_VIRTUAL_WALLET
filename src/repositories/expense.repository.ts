import Expense, { IExpense } from "../models/Expenses.ts";

export const createExpenseRepository = (body: IExpense) => Expense.create(body);

