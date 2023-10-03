import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import user from "../models/User.js";

const UserRouter = Router();

UserRouter.post("/", userController.createUserController)//ok
UserRouter.get("/", userController.findAllUsersController)//ok
UserRouter.use(AuthMiddleware)
UserRouter.get("/:id", userController.findUserByIdController)//ok
UserRouter.post("/:id", AuthMiddleware, userController.updateUserController)//ok
export default UserRouter