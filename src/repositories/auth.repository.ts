import User from "../models/User.js";
import jwt from "jsonwebtoken"


const loginRepository = (email: String) => User.findOne({ email: email }).select("+password");

const generateToken = (id: String) => jwt.sign({ id: id }, process.env.SECRET_JWT!, { expiresIn: 10800 });

export default {
  loginRepository,
  generateToken
}