import dotenv from 'dotenv';
dotenv.config();  // This loads the variables from the .env file

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1); // exit the process with failure code
  }
};

export default connectDB;
