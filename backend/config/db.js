const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.log("💡 Tip: Ensure MongoDB is running locally or check your MONGO_URI in .env");
    // Removed process.exit(1) to prevent the server from crashing immediately.
    // This allows the user to see the error and fix it without nodemon crashing.
  }
};

module.exports = connectDB;
