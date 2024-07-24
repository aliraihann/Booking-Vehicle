import { submitBooking, getBookingList, BookingListPerManager, bookingApproval } from "../controllers/booking.js";
import { tokenAuthentication, deptTokenAuthentication, fleetTokenAuthentication } from "../middleware/token_middleware.js";
import { Router } from "express";

const router = Router();

router.post('/booking/new', tokenAuthentication, submitBooking);
router.get('/booking/list', tokenAuthentication, getBookingList);
// booking list for dept/ fleet manager approval
router.get('/booking/approval/list/:department', deptTokenAuthentication, BookingListPerManager);
router.get('/booking/approval/list/:fleet', fleetTokenAuthentication, BookingListPerManager);
// manager approval update
router.post('/booking/:booking_id/approval/:department', deptTokenAuthentication, bookingApproval);
router.post('/booking/:booking_id/approval/:fleet', bookingApproval);


export default router;