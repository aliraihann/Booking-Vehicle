import vehicleSchema from "../schemas/vehicle.js";
import mongoose from "mongoose";

const Vehicle = mongoose.model("vehicle", vehicleSchema);

// create vehicle document
const createVehicle = async (vehicle_type, brand, model, year, license_plate, passenger_capacity, cargo_capacity, fuel_type, ownership_status) => {
    try {
        const newVehicle = await Vehicle.create({
            vehicle_type, 
            brand, 
            model, 
            year, 
            license_plate, 
            passenger_capacity, 
            cargo_capacity, 
            fuel_type, 
            ownership_status
        });
        console.log('new vehicle has created');
        return newVehicle;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed create new vehicle document on model: ${error.message}`);
        throw error;
    }
};

const vehicleList = async () => {
    try {
        // find all Vehicle's document
        const list = await Vehicle.find({});
        return list;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get vehicle list on model: ${error.message}`);
        throw error;
    }
};

const findVehicleById = async (id) => {
    try {
        // find vehicle document by document's id
        const vehicle = Vehicle.findById(id);
        return vehicle;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get vehicle by id on model: ${error.message}`);
        throw error;
    }
};

const updateVehicleAvailability = async (id, update) => {
    try {
        const vehicleUpdate = await Vehicle.findByIdAndUpdate(id, {availability: update});
        console.log(`vehicle id: ${id} has been updated`);
        return vehicleUpdate;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed update vehicle by id on model: ${error.message}`);
        throw error;
    }
};

export {
    createVehicle,
    vehicleList,
    findVehicleById,
    updateVehicleAvailability
};