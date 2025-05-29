import mongoose from "mongoose"

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

connectDB()
