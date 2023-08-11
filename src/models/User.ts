import mongoose from "mongoose";
import { hashSync } from "bcrypt-ts"

export interface IUser {
  name: string,
  username: string,
  email: string,
  password: string
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}
)
UserSchema.pre("save", async function (next) {
  const hash = await hashSync(this.password, 10)
  this.password = hash//await bcrypt.hash(this.password, 10);
  next()
})

const user = mongoose.model<IUser>("User", UserSchema)
export default user