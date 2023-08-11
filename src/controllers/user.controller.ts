import { Request, Response } from "express"
import userService from "../services/user.service.js"

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUserService(req.body)
    return res.status(201).send(user)
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(400).send((erro as Error).message)
    }
    else {
      return res.status(400).send("Error creating user")
    }
  }
}

const findAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsersService()
    return res.status(200).send(users)
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(400).send((erro as Error).message)
    }
    else {
      return res.status(400).send("Error search users")
    }
  }
}

const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const user = await userService.findUserByIdService(userId, userIdLogged)

    return res.send(user)
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(400).send((erro as Error).message)
    }
    else {
      return res.status(400).send("Error search user")
    }
  }
}

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { name, username, password } = req.body
    const userIdLogged = req.userId;
    const { id: userId } = req.params
    const response = await userService.updateUserService({ name, username, password }, userIdLogged, userId)
    console.log(response)

    return res.send(response)
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      return res.status(400).send((erro as Error).message)
    }
    else {
      return res.status(400).send("Error update user")
    }
  }
}
export default {
  createUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController
}