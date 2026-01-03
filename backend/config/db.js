import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("DB connection failed",error);
    }
}

export default connectDB;