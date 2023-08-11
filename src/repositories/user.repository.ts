import User, { IUser } from "../models/User.js";
export interface IUpdateUser {
  name: string, username: string, password: string
}
const createUserRepository = (body: IUser) => User.create(body);

const findAllUsersRepository = () => User.find();

const findUserById = (id: string) => User.findById(id)

const updateUserRepository = (id: string, { name, username, password }: IUpdateUser) => User.findOneAndUpdate({ _id: id }, { name, username, password }, { rawResult: true })

const findUserByEmailRepository = (email: string) => User.findOne({ email: email })


export default {
  createUserRepository,
  findAllUsersRepository,
  findUserById,
  updateUserRepository,
  findUserByEmailRepository
}