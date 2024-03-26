import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://emoric30199:cocopom0709@cluster0.1qejvu6.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Success: Connected to MongoDB")
  }catch(err) {
    console.log("Failur: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB