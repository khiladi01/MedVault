import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { upload } from "../utils/multer.js"; // multer is used for file uploads

const router = express.Router();

// Update profile function
const updateProfile = async (req, res) => {
    try {
        // Get user ID from authenticated request
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Get update data from request
        const { name, email, phone, address, age, weight, gender, prescription } = req.body;
        
        // Prepare update object
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (address) updateData.address = address;
        if (age) updateData.age = age;
        if (weight) updateData.weight = weight;
        if (gender) updateData.gender = gender;
        if (prescription) updateData.prescription = prescription;
        
        // Handle avatar upload
        if (req.file) {
            updateData.avatar = req.file.path;
        }

        // Update user in database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Middleware to handle file uploads
router.put("/update-profile", upload.single("avatar"), updateProfile);

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, address, age, weight, gender, prescription, password } = req.body;

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
            prescription,
            // If avatar is uploaded, it will be handled by multer and stored in req.file
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