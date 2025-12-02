import { createDepartment, getAllDepartment, getDepartmentbyID, deleteDepartment, getPublicDepartments } from '../controller/department.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import express from 'express';

const router = express.Router()

router.get("/public", getPublicDepartments); // Public route must be before :id route
router.post("/", authMiddleware, createDepartment)
router.get("/", authMiddleware, getAllDepartment)
router.get("/:id", authMiddleware, getDepartmentbyID)
router.delete("/:id", authMiddleware, deleteDepartment)

export default router;