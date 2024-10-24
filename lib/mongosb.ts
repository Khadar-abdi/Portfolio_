import mongoose from "mongoose";
const { MONGO_DB_URL } = process.env;
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_DB_URL as string);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};