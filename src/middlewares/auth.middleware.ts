import dotenv from "dotenv"
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import userService from "../services/user.service.js"
dotenv.config()

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);
  if (!authorization.toUpperCase().includes("BEARER")) return res.sendStatus(401);

  const token = authorization.replace("Bearer", "")
  const secret = process.env.SECRET_JWT!

  jwt.verify(token.trim(), secret, async (error, decoded: any) => {
    if (error) return res.status(500).send({ message: "Token invalid" })

    const user = await userService.findUserByIdService(decoded.id, "")
    if (!user || !user.id) return res.status(500).send({ message: "Token invalid" })

    req.userId = user.id;
    return next()
  })
}