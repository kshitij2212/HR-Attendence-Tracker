import express from "express";
import { register, Login } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", Login);

export default router;
