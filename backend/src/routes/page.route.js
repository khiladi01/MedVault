import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

// ================= UPDATE PROFILE =================
router.put("/update-profile", upload.single("avatar"), async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        let updateData = { ...req.body };

        // Hash password if provided
        if (req.body.password) {
            updateData.password = await bcrypt.hash(req.body.password, 10);
        }

        // Handle avatar file upload
        if (req.file) {
            updateData.avatar = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
            runValidators: true
        }).select("-password");

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

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
});

// ================= REGISTER =================
router.post("/register", async (req, res) => {
    try {
        const {
            fullname, age, gender, phone, email, address, city, postalcode, password,
            bloodgroup, weight, allergies, medicalhistory, medications, surgeries,
            familyhistory, lifestyle, idproof, prescription, emergencycontactname,
            relationship, emergencycontactphone
        } = req.body;

        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!password) return res.status(400).json({ message: "Password is required" });

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullname, age, gender, phone, email, address, city, postalcode,
            password: hashedPassword, bloodgroup, weight, allergies, medicalhistory,
            medications, surgeries, familyhistory, lifestyle, idproof, prescription,
            emergencycontactname, relationship, emergencycontactphone
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser._id, email: newUser.email, fullname: newUser.fullname }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "User login successfully", token });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

export { router };
