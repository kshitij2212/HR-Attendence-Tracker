import {createDepartment, getAllDepartment, getDepartmentbyID,deleteDepartment} from '../controller/department.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import express from 'express';  

const router = express.Router()

router.post("/",authMiddleware,createDepartment)
router.get("/",authMiddleware,getAllDepartment)
router.get("/:id",authMiddleware,getDepartmentbyID)
router.delete("/:id",authMiddleware,deleteDepartment)

export default router;