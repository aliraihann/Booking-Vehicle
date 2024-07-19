import bookingSchema from "../schemas/booking.js";
import mongoose from "mongoose";

const Booking = mongoose.model("booking", bookingSchema);

const createBooking = async (booking_date, employee_name, departure_date, return_date, vehicle_id, vehicle_type, driver_id) => {
    try {
        // create new booking document
        const newBooking = await Booking.create({
            booking_date, 
            employee_name, 
            departure_date, 
            return_date, 
            vehicle_id, 
            vehicle_type, 
            driver_id
        });
        console.log('new booking has created');
        return newBooking;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed create new booking document on model: ${error.message}`);
        throw error;
    }
};

const bookingList = async () => {
    try {
        const list = await Booking.find({});
        return list;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get booking list on model: ${error.message}`);
        throw error;
    }
};

// const deptBookingApproval

export {
    createBooking,
    bookingList
};