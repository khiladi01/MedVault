import express from "express";
import { registerUser } from "../controllers/auth.controllers.js"; // Add .js extension

const router = express.Router();

router.post("/register", registerUser);

export { router };