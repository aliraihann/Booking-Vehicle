import { createBooking, bookingList, updateBookingApproval, findBookingById } from "../models/booking.js";
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
        // format filter list's property
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
        console.error(`Failed get booking list on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

const BookingListPerManager = async (req, res) => {
    try {
        // Access a specific parameter by its name
        const {department, fleet} = req.params;
        const rawList = await bookingList();
        
        let list;

        // filter rawlist per list paramater (department / list)
        if (department) {
            list = rawList.filter(booking =>  booking.department_approval == "pending");
        } else if (fleet) {
            list = rawList.filter(booking =>  booking.fleet_approval == "pending");
        };

        // format filter list's property
        const formatedList = list.map(booking => ({
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
        if (formatedList.length > 0 ){
            res.status(200).json(formatedList);
        } else {
            res.status(200).json({message: "there is no outstanding approval"});
        }
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get booking list on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

const bookingApproval = async (req, res) => {
    try {
        // Access a specific parameter by its name
        const { booking_id, department, fleet } = req.params;
        const { approval } = req.body;
        console.log(department);

        // check if booking id is valid
        const booking = await findBookingById(booking_id);
        if (!booking) {
            return res.status(400).json('Incorrect booking id');
        };
        // check approval status
        let approvalResult;
        if (approval) {
            approvalResult = "approved";
        } else if (!approval) {
            approvalResult = "rejected";
        };
        // update booking approval per parameter (department / fleet)
        if (department) {
            await updateBookingApproval(booking_id, department, approvalResult);
        } else if (fleet) {
            await updateBookingApproval(booking_id, fleet, approvalResult);
        };
        res.status(201).json({
            message: `booking ${booking_id} has been ${approvalResult}`
        });
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed to update booking approval on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"});
    }
};

export {
    submitBooking,
    getBookingList,
    BookingListPerManager,
    bookingApproval
};