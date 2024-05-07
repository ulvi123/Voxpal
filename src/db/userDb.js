import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo DB connected')
    } catch (error) {
        console.error("Error connecting to DB", error.message)
        process.exit(1)
    }
}

export default connectDB