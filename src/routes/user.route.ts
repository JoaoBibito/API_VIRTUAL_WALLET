import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import user from "../models/User.js";

const UserRouter = Router();

UserRouter.post("/", userController.createUserController)
UserRouter.get("/", userController.findAllUsersController)
UserRouter.use(AuthMiddleware)
UserRouter.get("/:id", userController.findUserByIdController)
UserRouter.post("/:id", AuthMiddleware, userController.updateUserController)
export default UserRouter