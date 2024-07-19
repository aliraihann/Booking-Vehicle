import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    age: {
        type: String, 
        require: true
    },
    availability: {
        type: String, 
        require: true,
        default: "available"
    }
});

export default driverSchema;