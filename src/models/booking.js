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

const updateBookingApproval = async (booking_id, managerType, approvalResult) => {
    try {
        let booking;
        if (managerType == "department") {
            if (approvalResult == "rejected") {
                // update dept_manager approval and booking status if it's rejected
                booking = await Booking.findByIdAndUpdate(booking_id, {department_approval: approvalResult, status: approvalResult});
            } else {
                // update dept_manager approval only if the approval status is approved
                booking = await Booking.findByIdAndUpdate(booking_id, {department_approval: approvalResult});
            } 
        } else if (managerType == "fleet") {
            // update fleet_manager approval and booking status whether it is approved / rejected
            booking = await Booking.findByIdAndUpdate(booking_id, {fleet_approval: approvalResult, status: approvalResult});
        }
        console.log(`Booking ${booking_id} has been ${approvalResult} by ${managerType}`)
        return booking;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed to update booking approval on model: ${error.message}`);
        throw error;
    }
};

const findBookingById = async (id) => {
    try {
        const booking = Booking.findById(id);
        return booking;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed to find booking by id on model: ${error.message}`);
        throw error;
    }
};

export {
    createBooking,
    bookingList,
    updateBookingApproval,
    findBookingById
};