import { Router } from "express";
import {
  getExpenses
} from "../controllers/expense.controller"
const ExpensesSchema = Router();


ExpensesSchema.get("/", getExpenses)
