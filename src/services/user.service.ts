import { IUser } from "../models/User.js"
import userRepository, { IUpdateUser } from "../repositories/user.repository.js"
import { Error } from "mongoose";
import { hashSync } from "bcrypt-ts"

const createUserService = async (body: IUser) => {
  const { name, username, email, password } = body
  if (!name || !username || !email || !password) throw new Error("input all fields")

  const foundUser = await userRepository.findUserByEmailRepository(email)
  if (foundUser) throw new Error("User alread exists")

  const createdUser = await userRepository.createUserRepository({ name, username, email, password })

  if (!createdUser) throw new Error("Eror creating user")

  return ({
    user: {
      id: createdUser._id,
      name: createdUser.name,
      username: createdUser.username,
      email: createdUser.email
    }
  })
}

const findAllUsersService = async () => {
  const users = await userRepository.findAllUsersRepository()
  return users
}

const findUserByIdService = async (userId: string, userIdLogged: string) => {
  let idParam: string;
  if (!userId) {
    userId = userIdLogged;
    idParam = userId
  } else {
    idParam = userId
  }

  if (!idParam) throw new Error("Send an ID in the parameters to search for the user")

  const user = await userRepository.findUserById(idParam)
  return user
}

const updateUserService = async ({ name, username, password }: IUpdateUser, userIdLogged: string, userId: string) => {
  if (!name && !username && !password) throw new Error("Submit at least one field for update")

  const user = await findUserByIdService(userId, "")
  if (!user) throw new Error("User not found")

  if (userIdLogged != user.id) throw new Error("You can not update this user")

  if (password) password = await hashSync(password, 10)
  const response = await userRepository.updateUserRepository(userId, {
    name,
    username,
    password
  });

  if (response.ok < 1) throw new Error("Error updating user")


  return "User successfully updated"
}
export default {
  createUserService,
  findAllUsersService,
  findUserByIdService,
  updateUserService
}