import mongoose from 'mongoose';

// Connect to MongoDB

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
