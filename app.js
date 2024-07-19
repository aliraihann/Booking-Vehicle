import express from 'express';
import dbConnect from './src/config/dBConfig.js';
import { configDotenv } from "dotenv";
configDotenv();
import userRoutes from './src/routes/user.js';
import vehicleRoutes from './src/routes/vehicle.js';
import driverRoutes from './src/routes/driver.js';
import bookingRoutes from './src/routes/booking.js';


const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await dbConnect()
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        });
        app.use(express.json());
        app.use('/', userRoutes);
        app.use('/', vehicleRoutes);
        app.use('/', driverRoutes);
        app.use('/', bookingRoutes);
    } catch (error) {
        console.error(`Failed to start the server: ${error.message}`)
    }
};

startServer();