import { Request, Response } from 'express';
import {
  createExpenseService
} from "../services/expense.service.ts"

export const createExpenseController = async (req: Request, res: Response) => {
  try {

    const expanseCreated = await createExpenseService(req.body, req.userId);
    console.log("CRIADAAAA", expanseCreated)
  }
  catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(400).send((erro as Error).message)
    }
    else {
      return res.status(400).send("Error to creating expanse")
    }
  }
}
export const getExpenses = (req: Request, res: Response) => {

}

