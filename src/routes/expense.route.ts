import { Router } from "express";
import {
  getExpenses,
  createExpenseController
} from "../controllers/expense.controller.ts"
import { AuthMiddleware } from "../middlewares/auth.middleware.ts";
import { validId, validUser } from "../middlewares/global.middleware.ts";
const ExpenseRouter = Router();

ExpenseRouter.get("/", getExpenses)
ExpenseRouter.post("/", AuthMiddleware, validId, validUser, createExpenseController)

export default ExpenseRouter;
