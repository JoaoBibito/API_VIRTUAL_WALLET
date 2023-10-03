import express from 'express'
import cors from "cors"
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import expenseRouter from './routes/expense.route.js'
import connectDatabase from './database/db.js';

import { Router, Request, Response } from 'express';

const app = express();
connectDatabase();
app.use(cors())
app.use(express.json())

const route = Router()

route.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'hello world with Typescript' })
})

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/expenses", expenseRouter)


app.listen(3333, () => 'server running on port 3333')