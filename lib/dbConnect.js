import mongoose from "mongoose";

const dbConnect = async () => {
  const mongodbUrl = process.env.MONGODB_URL;
  if (!mongodbUrl) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (global.mongoose) {
    return global.mongoose;
  }

  global.mongoose = await mongoose
    .connect(mongodbUrl, { bufferCommands: false })
    .then((mongoose) => {
      console.log("Db connected");
      return mongoose;
    });

  return global.mongoose;
};

export default dbConnect;
