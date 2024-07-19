import { submitBooking, getBookingList } from "../controllers/booking.js";
import { tokenAuthentication, deptTokenAuthentication} from "../middleware/token_middleware.js";
import { Router } from "express";

const router = Router();

router.post('/booking/new', tokenAuthentication, submitBooking);
router.get('/booking/list', tokenAuthentication, getBookingList);
// booking list for Dept Manager approval
router.get('/booking/dept/approval/list', deptTokenAuthentication, deptBookingList);


export default router;