import {vehicleRegistration, getVehicleList} from "../controllers/vehicle.js";
import { tokenAuthentication } from "../middleware/token_middleware.js";
import { Router } from "express";

const router = Router();

router.post('/vehicle/add', tokenAuthentication, vehicleRegistration);
router.get('/vehicle/list', tokenAuthentication, getVehicleList);

export default router;