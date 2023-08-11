import { Request, Response, NextFunction } from "express"
import AuthService from "../services/auth.service.js";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.loginService(email, password)

    return res.send(user)
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(404).send((erro as Error).message)
    }
    else {
      return res.status(404).send("User or password not found")
    }
  }
}
export default {
  login
}
