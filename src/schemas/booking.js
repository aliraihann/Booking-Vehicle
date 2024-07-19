import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    booking_date: {
        type: String, 
        require: true
    },
    employee_name: {
        type: String, 
        require: true
    },
    departure_date: {
        type: Date, 
        require: true
    },
    return_date: {
        type: Date, 
        require: true
    },
    vehicle_id: {
        type: String, 
        require: true
    },
    vehicle_type: {
        type: String, 
        require: true
    },
    driver_id: {
        type: String, 
        require: true
    },
    department_approval: {
        type: String, 
        require: true,
        default: 'pending'
    },
    fleet_approval: {
        type: String, 
        require: true,
        default: 'pending'
    },
    status: {
        type: String, 
        require: true,
        default: 'on approval'
    },
});

export default bookingSchema;
