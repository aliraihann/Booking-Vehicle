import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    vehicle_type: {
        type: String, 
        require: true
    },
    brand: {
        type: String, 
        require: true
    },
    model: {
        type: String, 
        require: true
    },
    year: {
        type: Number, 
        require: true
    },
    license_plate: {
        type: String, 
        require: true
    },
    passenger_capacity: {
        type: Number, 
        require: true
    },
    cargo_capacity: {
        type: Number, 
        require: true
    },
    fuel_type: {
        type: String, 
        require: true
    },
    ownership_status: {
        type: String, 
        require: true
    },
    availability: {
        type: String, 
        require: true,
        default: "available"
    }
});

export default vehicleSchema;