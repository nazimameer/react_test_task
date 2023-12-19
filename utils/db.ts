import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGO URI not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "craxinoTech",
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
