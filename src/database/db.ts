import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from "dotenv"
dotenv.config()
const connectDatabase = () => {
  console.log("Wait connecting to the database");
  const Mongo: string = process.env.MONGODB_URI!

  mongoose.connect(Mongo, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error))
}

export default connectDatabase