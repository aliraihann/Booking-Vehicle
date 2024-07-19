import {userRegistration, userLogin} from "../controllers/user.js";
import { Router } from "express";

const router = Router();

router.post('/user/registration', userRegistration);
router.post('/user/login', userLogin);

export default router;
