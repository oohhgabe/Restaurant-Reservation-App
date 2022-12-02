import express from "express";
import loginInfo from "../controllers/login.controller.js";

const router = express.Router();

router.post("/login", loginInfo);

export default router;
