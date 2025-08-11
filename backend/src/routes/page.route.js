import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, address, age, weight, gender, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({
            name,
            email,
            phone,
            address,
            age,
            weight,
            gender,
            // Store hashed password    
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                email: newUser.email,
                password: newUser.password // hashed
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists + explicitly include password
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // console.log("Plain:", password);           // Debug
    // console.log("Hash:", user.password);       // Debug

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    //  Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },  // payload
      process.env.JWT_SECRET,               // secret key
      { expiresIn: "1h" }                   // options
    );

    // Send response
    res.status(200).json({
        message: "User login successfully",
        token
    });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

export { router };