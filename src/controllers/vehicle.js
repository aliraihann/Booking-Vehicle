import {createVehicle, vehicleList} from "../models/vehicle.js";

const vehicleRegistration = async (req, res) => {
    try {
        const {
            vehicle_type, 
            brand, 
            model, 
            year, 
            license_plate, 
            passenger_capacity, 
            cargo_capacity, 
            fuel_type, 
            ownership_status
        } = req.body;
        // create new vehicle document
        const vehicle = await createVehicle(
            vehicle_type, 
            brand, 
            model, 
            year, 
            license_plate, 
            passenger_capacity, 
            cargo_capacity, 
            fuel_type, 
            ownership_status
        );
        res.status(201).json({
            id: vehicle._id,
            vehicle_type, 
            brand, 
            model, 
            year, 
            license_plate, 
            passenger_capacity, 
            cargo_capacity, 
            fuel_type, 
            ownership_status
        })
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed register new vehicle on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

const getVehicleList = async (req, res) => {
    try {
        // find all vehicle's document
        const rawList = await vehicleList();
        // format vehicle list document property
        const list = rawList.map(vehicle => ({
            id: vehicle._id,
            vehicle_type: vehicle.vehicle_type, 
            brand: vehicle.brand, 
            model: vehicle.model, 
            year: vehicle.year, 
            license_plate: vehicle.license_plate, 
            passenger_capacity: vehicle.passenger_capacity, 
            cargo_capacity: vehicle.cargo_capacity, 
            fuel_type: vehicle.fuel_type, 
            ownership_status: vehicle.ownership_status,
            availablity: vehicle.availability
        }))
        res.status(200).json(list);
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get vehicle list on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

export {
    vehicleRegistration, 
    getVehicleList
};