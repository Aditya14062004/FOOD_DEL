/** Contains logic using which we will connect to the database. */
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://greatstack:123451@cluster0.kc89x.mongodb.net/food-del', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process if DB fails
  }
};