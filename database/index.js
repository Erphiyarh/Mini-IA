import mongoose, { Schema } from"mongoose";
export const DB_CONNECT = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    console.error(error);
  }
};
