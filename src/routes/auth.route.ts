import { Router } from "express";
const AuthRouter = Router();
import authController from "../controllers/auth.controller.js";

AuthRouter.post("/", authController.login)

export default AuthRouter