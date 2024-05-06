import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database using the provided URI.
 * @async
 * @function connectDB
 * @returns {Promise<void>} A Promise that resolves when the connection is successful.
 * @throws {Error} If there is an error connecting to the database.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoBD Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
