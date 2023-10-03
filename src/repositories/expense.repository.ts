import Expense, { IExpense } from "../models/Expenses";

const createExpenseRepository = (body: IExpense) => Expense.create(body);