import { createBooking, bookingList } from "../models/booking.js";
import { findVehicleById, updateVehicleAvailability } from "../models/vehicle.js";
import { findDriverById, updateDriverAvailability } from "../models/driver.js";

const submitBooking = async (req, res) => {
    const {            
        employee_name, 
        departure_date, 
        return_date, 
        vehicle_id, 
        vehicle_type, 
        driver_id
    } = req.body
    try {
        // check if all the booking information is available in request body
        if ( !employee_name || !departure_date || !return_date || !vehicle_id || !vehicle_type || !driver_id ) {
            res.status(400).json('Please submit all the required booking information');
        };
        // check if the requested vehicle is available
        const selectedVehicle = await findVehicleById(vehicle_id);
        if (selectedVehicle.availability !== "available") {
            res.status(400).json('The requested vehicle is currently unavailable');
        };
        // check if the requested driver is available
        const driver = await findDriverById(driver_id);
        if (driver.availability !== "available") {
            res.status(400).json('The requested driver is currently unavailable');
        };
        // set booking date and format the departure date and return date
        const booking_date = new Date();
        const departureDate = new Date(departure_date);
        const returnDate = new Date(return_date);

        const update = "booked";
        // create new booking document
        const booking = await createBooking(booking_date, employee_name, departureDate, returnDate, vehicle_id, vehicle_type, driver_id );
        // update vehicle availability
        await updateVehicleAvailability(vehicle_id, update);
        // update driver availability
        await updateDriverAvailability(driver_id, update);

        res.status(201).json({
            id: booking._id,
            booking_date, 
            employee_name, 
            departure_date: departureDate, 
            return_date: returnDate, 
            vehicle_id, 
            vehicle_type, 
            driver_id, 
            department_approval: booking.department_approval,
            fleet_approval: booking.fleet_approval,
            status: booking.status
        })
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed register new booking on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

const getBookingList = async (req, res) => {
    try {
        // find all the Booking document
        const rawlist = await bookingList();
        // format raw list of Booking document
        const list = rawlist.map(booking => ({
            id: booking._id,
            booking_date: booking.booking_date, 
            employee_name: booking.employee_name, 
            departure_date: booking.departure_date, 
            return_date: booking.return_date, 
            vehicle_id: booking.vehicle_id, 
            vehicle_type: booking.vehicle_type, 
            driver_id: booking.driver_id, 
            department_approval: booking.department_approval,
            fleet_approval: booking.fleet_approval,
            status: booking.status
        }));
        res.status(200).json([list]);
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get vehicle list on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

// const deptBookingList = async (req, res) => {
//     try {
//         const rawList = await getBookingList();
//         console.log(rawList);
//         const list = rawList.filter(booking =>  booking.department_approval == "pending");
//         res.status(200).json(list);
//     } catch (error) {
//         // log error to console for degugging purposes
//         console.error(`Failed get vehicle list on controller: ${error.message}`);
//         res.status(500).json({message: "Internal server error"})
//     }
// };

export {
    submitBooking,
    getBookingList
};