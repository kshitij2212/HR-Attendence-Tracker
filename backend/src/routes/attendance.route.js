import {checkIN,checkOut,getAllAttendance,getattendancebyId} from '../controller/attendance.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import express from 'express';

const router = express.Router()
router.get("/",authMiddleware,getAllAttendance)
router.get("/:employeeId",authMiddleware,getattendancebyId)
router.post("/check-in",authMiddleware,checkIN);
router.post("/check-out",authMiddleware,checkOut);

export default router;