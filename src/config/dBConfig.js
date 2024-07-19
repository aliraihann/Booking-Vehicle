import { configDotenv } from "dotenv";
configDotenv();
import mongoose, { mongo } from "mongoose";

const dbConnect = async () => {
    try {
        const uri = process.env.uri;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection success');
    } catch (error) {
        console.error(`Databse connection failed: ${error.message}`);
        throw error;
    }
};

export default dbConnect;