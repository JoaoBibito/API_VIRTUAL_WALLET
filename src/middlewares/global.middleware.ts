import mongoose from "mongoose";
import userService from "../services/user.service.ts";
import { Request, Response, NextFunction } from "express";

export const validId = (req: Request, res: Response, next: NextFunction) => {
  try {
    let idParam;
    if (!req.params.id) {
      req.params.id = req.userId;
      idParam = req.params.id;
    }
    else {
      idParam = req.params.id
    }

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: "Invalid Id" });
    }
    next()
  } catch {
    res.sendStatus(400)
  }
}

export const validUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.userId
    const user = await userService.findUserByIdService(id, id);
    if (!user) return res.status(400).send("User not found")

    req.id = id
    req.user = user
    next();
  }
  catch {
    res.sendStatus(400)
  }
}