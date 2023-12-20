import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) return console.log("Already connected to MongoDB");
console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "craxinoTech",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
