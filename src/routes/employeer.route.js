import {createEmployee} from "../controller/employee.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import express from "express";

const router = express.Router()


router.post("/",authMiddleware,createEmployee);

export default router;
