import {driverRegistration, getDriverList} from "../controllers/driver.js";
import { tokenAuthentication } from "../middleware/token_middleware.js";
import { Router } from "express";

const router = Router();

router.post('/driver/add', tokenAuthentication, driverRegistration);
router.get('/driver/list', tokenAuthentication, getDriverList);


export default router;