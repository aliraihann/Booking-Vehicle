import mongoose from "mongoose";
import driverSchema from "../schemas/driver.js";

const Driver = mongoose.model("driver", driverSchema);

const createDriver = async (name, age) => {
    try {
        // create new driver document
        const newDriver = await Driver.create({name, age});
        console.log('new driver has created');
        return newDriver;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed create new driver document on model: ${error.message}`);
        throw error;
    }
};

const driverList = async () => {
    try {
        // find all Driver's document
        const list = await Driver.find({});
        return list;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get driver list on model: ${error.message}`);
        throw error;
    }
};

const findDriverById = async (id) => {
    try {
        // find Driver document by it's document id
        const driver = await Driver.findById(id);
        return driver;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get driver by id  on model: ${error.message}`);
        throw error;
    }
};

const updateDriverAvailability  = async (id, update) => {
    try {
        const driverUpdate = await Driver.findByIdAndUpdate(id, {availability: update});
        console.log(`Driver id: ${id} has been updated`);
        return driverUpdate;
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed update driver by id on model: ${error.message}`);
        throw error;
    }
};

export {
    createDriver,
    driverList,
    findDriverById,
    updateDriverAvailability
};