import {createDriver, driverList} from "../models/driver.js";

const driverRegistration = async (req, res) => {
    try {
        const { name, age } = req.body;
        // create new driver document
        const driver = await createDriver(name, age);
        res.status(201).json({
            id: driver._id,
            name,
            age
        });
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed register new driver on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"});
    }
};

const getDriverList = async (req, res) => {
    try {
        // find all driver's document
        const rawList = await driverList();
        // format driver list document property
        const list = rawList.map(driver => ({
            id: driver._id,
            name: driver.name,
            age: driver.age,
            availablity: driver.availability
        }));
        res.status(200).json(list);
    } catch (error) {
        // log error to console for degugging purposes
        console.error(`Failed get driver list on controller: ${error.message}`);
        res.status(500).json({message: "Internal server error"})
    }
};

export {
    driverRegistration,
    getDriverList
};
