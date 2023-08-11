import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";
import { compareSync } from "bcrypt-ts";

const loginService = async (email: string, password: string) => {

  const user = await authRepository.loginRepository(email)
  if (!user) throw new Error("User or password not found")

  const passwordIsValid = compareSync(password, user.password)
  if (!passwordIsValid) throw new Error("User or password not found")

  const token = authRepository.generateToken(user.id)
  return ({ token: token })
}

const generateToken = (id: String) => jwt.sign({ id: id }, process.env.SECRET_JWT!, { expiresIn: 10800 });

export default {
  loginService,
  generateToken
}