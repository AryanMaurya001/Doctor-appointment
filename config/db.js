const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // Check if MONGO_URL is defined
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGO_URL environment variable is not defined.");
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
